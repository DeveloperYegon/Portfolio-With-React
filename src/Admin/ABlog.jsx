import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import ANotifications from './ANotifications';
import ARecruit from './ARecruit';

function ABlog() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState('');
  const navigate = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;

  console.log(user?.name);

  const notify = () => toast("Submitted Successfully!");

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { title, description } = data;

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        description,
        authorMail: user?.email || "Anonymous",
        author: user?.name || "Anonymous",
        timestamp: serverTimestamp(),
      });

      console.log("Blog data saved to Firestore");
      notify();
      setErrorMessages('');
      reset();

      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error(err);
      setErrorMessages("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='md:m-5 m-2 bg-[#182B5C] py-2 md:p-5'>
      <section className='border md:m-5 m-2 rounded-xl h-full bg-white border-slate-950 p-4'>
        {errorMessages && (
          <div className='text-center text-red-600'>{errorMessages}</div>
        )}

        <p className='text-center text-4xl font-bold py-4'>Add Blog</p>
        <hr className='h-1 bg-[#ED7D3B] w-[50%] m-auto' />

        <form onSubmit={handleSubmit(onSubmit)} noValidate className='m-4 p-4 rounded flex flex-col'>
          <label className='my-4 font-bold' htmlFor="title">Title:</label>
          <input
            className='py-3 border px-3 border-slate-600 rounded-xl'
            {...register("title", { required: "Title is required" })}
            type="text"
            id="title"
          />
          <p className='text-red-500 text-left text-[12px]'>{errors.title?.message}</p>

          <label className='my-4 font-bold' htmlFor="description">Description:</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className='p-2 border border-slate-600 rounded-xl'
            id="description"
          />
          <p className='text-red-500 text-left text-[12px]'>{errors.description?.message}</p>

          <input
            className='bg-[#ED7D3B] font-bold p-3 rounded-xl m-3'
            type="submit"
            value={isLoading ? "Submitting..." : "Submit"}
            disabled={isLoading}
          />
        </form>
      </section>

      <ARecruit />
      <ANotifications />

      <ToastContainer position="top-center" autoClose={3000} />
    </main>
  );
}

export default ABlog;
