import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { db, setDoc, doc } from '../firebase';
import { getAuth } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [errorMessages, setErrorMessages] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const notifySuccess = () => toast.success('Submitted Successfully!', { position: 'top-center' });

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)));
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { name, email, message, country } = data;

    try {
      await setDoc(doc(db, 'contacts', email), {
        name,
        email,
        message,
        country,
        timestamp: new Date().toISOString(),
      });

      console.log('User data saved to Firestore');
      reset();
      notifySuccess();

      setErrorMessages('');

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error saving data:', error);
      setErrorMessages(error.message || 'Submission failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#182B5C] to-[#46567C] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto bg-[#46567C]/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-10">
        {/* Title */}
        <h3 className="text-center  sm:text-3xl md:text-4xl font-bold text-white mb-6">
          Leave a Comment
        </h3>
        <hr className="w-1/2 mx-auto h-1 bg-[#ED7D3B] rounded mb-8" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-[#182B5C] text-white rounded-xl p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
              Share Your Feedback
            </h2>
            <hr className="w-3/4 h-1 bg-[#ED7D3B]/20 mb-6" />
            <p className="text-center text-base leading-relaxed italic">
              "Feedback is the breakfast of champions, the compass that guides us to improvement, and the mirror that reflects our potential for greatness."
            </p>
            <p className="mt-4 font-bold text-[#ED7D3B]">-- ChatGPT --</p>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-[#182B5C] text-white rounded-xl p-6 sm:p-8">
            {errorMessages && (
              <div className="text-red-500 text-center mb-4">{errorMessages}</div>
            )}

            <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full p-3 bg-white/10 border border-[#ED7D3B]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED7D3B] transition-all duration-300"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full p-3 bg-white/10 border border-[#ED7D3B]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED7D3B] transition-all duration-300"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-semibold mb-2">
                  Country:
                </label>
                <select
                  id="country"
                  className="w-full p-3 bg-white/10 border border-[#ED7D3B]/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#ED7D3B] transition-all duration-300"
                  {...register('country', { required: 'Country is required' })}
                >
                  <option value="" disabled className="text-gray-400">
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.name.common} className="text-black">
                      {country.name.common}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  placeholder="Type Your Message Here"
                  className="w-full p-3 bg-white/10 border border-[#ED7D3B]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED7D3B] transition-all duration-300 h-32 resize-none"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-white ${
                    isLoading ? 'bg-[#ED7D3B]/50 cursor-not-allowed' : 'bg-[#ED7D3B] hover:bg-[#d66c2e]'
                  } transition-colors duration-300`}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
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
      </div>
    </main>
  );
}

export default Contact;