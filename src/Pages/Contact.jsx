import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [errorMessages, setErrorMessages] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)));
      });
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    axios.post('http://localhost:3002/requests', data)
      .then((response) => {
        if (response.status === 200) {
          alert("Inquiry Submitted successfully");
          setTimeout(() => navigate('/'), 2000);
          reset();
          setErrorMessages('');
        } else {
          setErrorMessages("Submission failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMessages("Submission failed. Please try again.");
      })
      .finally(() => setIsLoading(false));
      
  };

  return (
    <main className='text-[#fff] h-full rounded-xl shadow-lg shadow-[#7a5d4c] p-10  bg-[#46567C]  py-3 md:mx-20 m-4 '>
        <h3 className='text-center text-4xl py-3'>Leave A Comment</h3>
        <hr className='bg-[#ED7D3B] w-[50%] h-1 m-auto'/>

      <div className='md:grid gap-5 grid-cols-2 md:m-5 '>
        <div className='hidden md:flex flex-col bg-[#182B5C] text-[#fff] items-center rounded-[10px] h-full md:p-20'>
          <h2 className='flex text-4xl'>Share your feedback</h2>
          <hr className='m-4 h-1' />
          <p className=''>
            "Feedback is the breakfast of champions, the compass that guides us to improvement and the mirror that reflects our potential for greatness."
          </p>
          <p className='font-bold '> --ChatGPT--</p>
        </div>

        <div className=' p-5 bg-[#182B5C] text-[#fff] rounded-[10px] h-full'>
          {errorMessages && (
            <div id="authmessage" style={{ color: 'red' }}>
              {errorMessages}
            </div>
          )}

          <h3 className='text-center  text-[#fff] text-4xl py-4'>Get in Touch</h3>
          <hr className='m-auto bg-[#ED7D3B] w-[50%] h-1 ' />

          <form className='flex flex-col' noValidate onSubmit={handleSubmit(onSubmit)}>
             
                <label className='py-3 font-bold' htmlFor="contactname">Name:</label>
                <input
                  className="border border-slate-700 p-3 bg-gray-200 text-black rounded-xl"
                  type="text"
                  placeholder='Enter Your Name'
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
              <p className='text-red-500 text-left text-[12px]'>{errors.name?.message}</p>

                <label className='py-3 font-bold' htmlFor="email">Email:</label>
                <input
                  className="border border-slate-700 p-3 bg-gray-200 p-2 text-black rounded-xl"
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
                name="country"
                className='border border-slate-700 bg-gray-200 p-3 text-black rounded-xl'
                id="country"
                {...register("country", {
                  required: "Country is required",
                })}
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
                name="message"
                placeholder='Type Your Message Here.'
                id="message"
                {...register("message", {
                  required: "Message is required",
                })}
              />

              <p className='text-red-500 text-left text-[12px]'>{errors.message?.message}</p>

              <input value={isLoading?'Submitting...' : "Submit" }  className=' rounded-xl p-2 mt-4 font-bold bg-[#ED7D3B] ' type='submit'/>
          </form>
        </div>
      </div>

     
    </main>
  );
}
export default Contact;
