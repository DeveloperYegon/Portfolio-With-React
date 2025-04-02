import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { db, setDoc, doc } from "../firebase"; 
import { getAuth } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [errorMessages, setErrorMessages] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth(); // Get Firebase Auth instance
  const user = auth.currentUser; // Get current logged-in user
      const notifySuccess = () => toast("Submitted Successfully!");
    

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)));
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { name, email, message, country } = data;

    try {
   

      await setDoc(doc(db, "contacts",email), { // Use email as ID if no uid
        name,
        email,
        message,
        country,
        timestamp: new Date().toISOString(),
      });

      console.log("User data saved to Firestore");
      reset();
      notifySuccess(); // Show success toast

      setErrorMessages('');

      setTimeout(() => {
        navigate('/'); // Redirect after a short delay
      }, 2000);
    } catch (error) {
      console.error("Error saving data:", error);
      setErrorMessages(error.message || "Submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='text-[#fff] h-full rounded-xl shadow-lg shadow-[#7a5d4c] p-10 bg-[#46567C] py-3 md:mx-20 m-4'>
      <h3 className='text-center text-4xl py-3'>Leave A Comment</h3>
      <hr className='bg-[#ED7D3B] w-[50%] h-1 m-auto'/>

      <div className='md:grid gap-5 grid-cols-2 md:m-5'>
        <div className='hidden md:flex flex-col bg-[#182B5C] text-[#fff] items-center rounded-[10px] h-full md:p-20'>
          <h2 className='flex text-4xl'>Share your feedback</h2>
          <hr className='m-4 h-1' />
          <p>
            "Feedback is the breakfast of champions, the compass that guides us to improvement and the mirror that reflects our potential for greatness."
          </p>
          <p className='font-bold'> --ChatGPT--</p>
        </div>

        <div className='p-5 bg-[#182B5C] text-[#fff] rounded-[10px] h-full'>
          {errorMessages && <div style={{ color: 'red' }}>{errorMessages}</div>}
          {/* {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>} */}

          <h3 className='text-center text-[#fff] text-4xl py-4'>Get in Touch</h3>
          <hr className='m-auto bg-[#ED7D3B] w-[50%] h-1' />

          <form className='flex flex-col' noValidate onSubmit={handleSubmit(onSubmit)}>
            <label className='py-3 font-bold' htmlFor="contactname">Name:</label>
            <input
              className="border border-slate-700 p-3 bg-gray-200 text-black rounded-xl"
              type="text"
              placeholder='Enter Your Name'
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            <p className='text-red-500 text-left text-[12px]'>{errors.name?.message}</p>

            <label className='py-3 font-bold' htmlFor="email">Email:</label>
            <input
              className="border border-slate-700 p-3 bg-gray-200 text-black rounded-xl"
              type="email"
              placeholder='Enter Your Email'
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address"
                }
              })}
            />
            <p className='text-red-500 text-left text-[12px]'>{errors.email?.message}</p>

            <label className='py-3 font-bold' htmlFor="country">Country:</label>
            <select
              className='border border-slate-700 bg-gray-200 p-3 text-black rounded-xl'
              id="country"
              {...register("country", { required: "Country is required" })}
            >
              <option value="" disabled>Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
            <p className='text-red-500 text-left text-[12px]'>{errors.country?.message}</p>

            <label className='py-3 font-bold' htmlFor="message">Message:</label>
            <textarea
              className="border border-slate-700 bg-gray-200 text-black p-3 rounded-[10px]"
              placeholder='Type Your Message Here.'
              id="message"
              {...register("message", { required: "Message is required" })}
            />
            <p className='text-red-500 text-left text-[12px]'>{errors.message?.message}</p>

            <input
              value={isLoading ? 'Submitting...' : "Submit"}
              className='rounded-xl p-2 mt-4 font-bold bg-[#ED7D3B]'
              type='submit'
            />
          </form>
        </div>
      </div>
          <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
    </main>
  );
}

export default Contact;
