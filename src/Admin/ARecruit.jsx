import React, { useState, useEffect } from 'react';
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from "../firebase";
import { useNavigate, Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ARecruit() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const notifySuccess = () => toast("Submitted Successfully!");

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    setIsLoading(true); // Set loading state to true
    const { name, email, password } = data; // Extract email and password from form data

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        name,
        email,
        createdAt: Date.now()
      });
      console.log("User data saved to Firestore");
      notifySuccess(); // Show success toast
      reset(); // Reset the form
      setErrorMessages(''); // Clear any previous errors      
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after a short delay
      }, 2000);
    } catch (error) {
      // Display specific error message
      setErrorMessages(error.message || 'An error occurred');
      setIsLoading(false); // Stop loading indicator
    }
  };

  return (
    <main className='bg-[#182B5C] p-5 h-screen'>
      <section className='border-slate-950 shadow-lg shadow-[#7a5d4c] md:w-2/3 m-auto bg-[#46567C] rounded-lg h-full p-4 border'>
        {errorMessages && (
          <div id="authmessage" className='text-center' style={{ color: 'red' }}>
            {errorMessages}
          </div>
        )}
        <p className='text-center text-white p-3 text-4xl'>Register Admin</p>
        <hr className='h-1 bg-[#ED7D3B] w-[50%] m-auto' />

        {/* Admin registration form */}
        <form className='m-4 p-4 rounded flex flex-col' onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className='py-4 text-white font-bold' htmlFor="name">Name:</label>
          <input
            className='p-2 border border-slate-600 rounded-xl'
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          <p className='text-red-500 text-left text-[12px]'>{errors.name?.message}</p>

          <label className='py-4 text-white font-bold' htmlFor="email">Email:</label>
          <input
            className='p-2 border border-slate-600 rounded-xl'
            type="email"
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

          <label className='py-4 text-white font-bold' htmlFor="password">Password:</label>
          <input
            className='p-2 border border-slate-600 rounded-xl'
            type={showPassword ? 'text' : 'password'}
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long"
              }
            })}
          />
          <button type="button" onClick={handleToggle} id="togglePassword">
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />} Show Password
          </button>
          <p className='text-red-500 text-left text-[12px]'>{errors.password?.message}</p>

          <input className='bg-[#ED7D3B] p-3 rounded-xl m-3' type="submit" value={isLoading ? "Submitting..." : "Submit"} disabled={isLoading} />
        </form>
      </section>

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

export default ARecruit;
