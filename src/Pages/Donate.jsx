import React, { useState } from 'react';
import axios from 'axios';

const BuyMeCoffee = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your server to initiate the STK Push
    axios.post('/api/stkpush', { phone, amount })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }

  return (

    <main className='text-[#fff] h-full rounded-xl shadow-lg shadow-[#7a5d4c] p-10  bg-[#46567C]  py-3 md:mx-20 m-4'>
      <h2 className='text-center text-white text-4xl py-4'>Buy Me Coffee</h2>
      <hr className='w-[50%] m-auto h-1  bg-white'/>

    <form className= '  md:p-4 rounded flex flex-col w-2/3 m-auto' onSubmit={handleSubmit}>
      <label className='py-4 text-white font-bold' htmlFor="phone">Phone Number:</label>
      <input
        type="text"
        value={phone}
        className='p-3 rounded-xl'
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter Phone Number"
      />
      <label className='py-4 text-white font-bold' htmlFor="amount">Amount:</label>
      <input
        type="number"
        value={amount}
        className='p-3 rounded-xl'
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
      />
      <button className='bg-[#ED7D3B] p-2 m-4  rounded-xl' type="submit">Continue</button>
    </form>

    </main>
    
  );
}

export default BuyMeCoffee;
