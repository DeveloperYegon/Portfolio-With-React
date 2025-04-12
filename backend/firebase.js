const admin = require("firebase-admin");

// Load Firebase credentials (Download this from Firebase Console > Service Accounts)
const serviceAccount = require("./port-18143-firebase-adminsdk-fbsvc-09b28dd86e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://port-18143.firebaseio.com"
});

const db = admin.firestore();

module.exports = { db };
