import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db, setDoc, doc } from "../firebase";
import { getAuth } from "firebase/auth";

import ANotifications from './ANotifications';
import ARecruit from './ARecruit';

function ABlog() {
  // React Hook Form
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const notify = () => toast("Submitted Successfully!");
  const [errorMessages, setErrorMessages] = useState('');
  const navigate= useNavigate();


  const auth = getAuth(); // Get Firebase Auth instance
  const user = auth.currentUser; // Get current logged-in user
  

  // Form submission status
  const onSubmit = async (data) => {
    setIsLoading(true);
    const { title, description } = data;

    try {
        await setDoc(doc(db, "blogs",user.uid), { // Use email as ID if no uid
              title,
              description,
              author: user.email, // Use email as author if no uid
              timestamp: new Date(),
             });

            console.log("Blog data saved to Firestore");  // Log success message  
            notify(); // Show toast
            setErrorMessages(""); // Clear error messages
            reset(); // Reset form fields
            setTimeout(() => {
              navigate('/blogs'); // Redirect after a short delay
            }, 2000);
    } catch (err) {
        console.log(err); // Log the error
        setErrorMessages(err.response?.data?.message || "An error occurred. Please try again."); // Set the error message
    }finally {
      setIsLoading(false);
    }
};
  return (
    <main className='md:m-5 m-2 bg-[#182B5C] py-2 md:p-5'>
      <section className='border md:m-5 m-2 rounded-xl h-full bg-white border-slate-950 p-4'>
        {errorMessages && (
          <div id="authmessage" className='text-center' style={{ color: 'red' }}>
            {errorMessages}
          </div>
        )}

    <p className='text-center text-4xl font-bold py-4'>Add Blog</p>

        <hr className='h-1 bg-[#ED7D3B] w-[50%] m-auto' />

        {/* Blog registration form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className='border border-slate-950 m-4 p-4 rounded flex flex-col'>
              <label className='my-4 font-bold ' htmlFor="title">Title:</label>
              <input
                className='p-2 border border-slate-600 rounded-xl'
                {...register("title", { required: "Title is required" })}
                type="text"
                id="title"
                name="title"
              />
            <p className='text-red-500 text-left text-[12px]'>{errors.title?.message}</p>

              <label className='my-4 font-bold' htmlFor="description">Description:</label>
              <textarea
                {...register("description", { required: "Description is required" })}
                className='p-2 border border-slate-600 rounded-xl'
                id="description"
                name="description"
              />
            <p className='text-red-500 text-left text-[12px]'>{errors.description?.message}</p>

           
          
            <input className='bg-[#ED7D3B] font-bold  p-3 rounded-xl m-3' type="submit" value="Submit" />
        </form>
      </section>

        <ARecruit/>
        <ANotifications />
        

      <ToastContainer
        position="top-center"
        autoClose={3000} // Automatically close after 3 seconds
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

export default ABlog;
