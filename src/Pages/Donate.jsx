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

    <main className='h-full m-4 md:m-10 bg-[#182B5C] p-5 md:p-10'>
      <h2 className='text-center text-white text-xl m-3'>Buy Me Coffee</h2>
      <hr className='w-[50%] m-auto h-1  bg-white'/>

    <form className='border p-5 m-4 border-slate-200 rounded-xl flex flex-col' onSubmit={handleSubmit}>
      <label className='text-white md:text-xl mt-2' htmlFor="phone">Phone Number:</label>
      <input
        type="text"
        value={phone}
        className='p-3 rounded-xl'
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter Phone Number"
      />
      <label className='text-white md:text-xl mt-2' htmlFor="amount">Amount:</label>
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
