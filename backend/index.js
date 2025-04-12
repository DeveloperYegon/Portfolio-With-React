const axios= require("axios");
const cors= require("cors");
const dotenv = require("dotenv");
const express = require("express");
const { db } = require("./firebase"); // Import the Firestore instance
const app = express();

app.use(express.json());
dotenv.config();
app.use(express.json());
app.use(cors());


// M-Pesa credentials from .env file
const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
const businessShortCode = process.env.MPESA_SHORTCODE;
const passKey = process.env.MPESA_PASSKEY;
const callbackURL = process.env.MPESA_CALLBACK_URL;

// Function to get access token
const getAccessToken = async () => {
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

    try {
        const response = await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
            headers: { Authorization: `Basic ${auth}` }
        });

        return response.data.access_token;
    } catch (error) {
        console.error("Error getting access token:", error.response.data);
        throw new Error("Failed to get access token");
    }
};

// STK Push API
app.post('/api/stkpush', async (req, res) => {
    const { phone, amount } = req.body;
    const accessToken = await getAccessToken();

    const timestamp = new Date().toISOString().replace(/[-:T.]/g, '').slice(0, 14);
    const password = Buffer.from(`${businessShortCode}${passKey}${timestamp}`).toString('base64');

    const requestBody = {
        BusinessShortCode: businessShortCode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: businessShortCode,
        PhoneNumber: phone,
        CallBackURL: callbackURL,
        AccountReference: "BuyMeCoffee",
        TransactionDesc: "Buy Me a Coffee"
    };

    try {
        const response = await axios.post("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", requestBody, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        console.log("STK Push Response:", response.data);
        return res.json(response.data);
    } catch (error) {
        console.error("Error in STK Push:", error.response.data);
        res.status(500).json({ message: "STK Push failed", error: error.response.data });
    }
});

app.post("/api/callback", async (req, res) => {
    const callbackData = req.body;

    console.log("Received M-Pesa Callback:", callbackData);

    if (!callbackData.Body) {
        return res.status(400).json({ message: "Invalid callback data" });
    }

    const resultCode = callbackData.Body.stkCallback.ResultCode;
    const resultDesc = callbackData.Body.stkCallback.ResultDesc;

    if (resultCode === 0) {
        const transactionData = callbackData.Body.stkCallback.CallbackMetadata;
        const amount = transactionData.Item.find(item => item.Name === "Amount")?.Value;
        const mpesaReceiptNumber = transactionData.Item.find(item => item.Name === "MpesaReceiptNumber")?.Value;
        const phoneNumber = transactionData.Item.find(item => item.Name === "PhoneNumber")?.Value;

        console.log("✅ Payment Successful:");
        console.log(`Amount: ${amount}`);
        console.log(`Mpesa Receipt Number: ${mpesaReceiptNumber}`);
        console.log(`Phone Number: ${phoneNumber}`);

        // Store payment in Firebase Firestore
        try {
            await db.collection("payments").doc(mpesaReceiptNumber).set({
                amount,
                mpesaReceiptNumber,
                phoneNumber,
                timestamp: new Date()
            });

            return res.json({ message: "Payment saved successfully in Firebase", amount, mpesaReceiptNumber, phoneNumber });
        } catch (error) {
            console.error("🔥 Error saving payment to Firebase:", error);
            return res.status(500).json({ message: "Failed to save payment" });
        }
    } else {
        console.log("❌ Payment Failed:", resultDesc);
        return res.status(400).json({ message: "Payment failed", reason: resultDesc });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
