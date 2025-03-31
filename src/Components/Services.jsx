import React from 'react'

function Services() {
  return (
    <main className=' text-white h-full shadow-lg shadow-[#634939] mx-4 md:mx-20 my-10 rounded-xl bg-[#46567C]  py-5 px-3 '>
                  <h3 className='text-center text-4xl py-4'>Services</h3>
                  <hr className=' w-[50%] h-1 bg-[#ED7D3B] m-auto'/>
                <div className=' m-10 gap-5'>
                      <div className='flex my-3 bg-white font-bold text-black border p-5 items-center '>Web Development</div>
                      <div className='fflex my-3 bg-white font-bold text-black border p-5 items-center'>API Integrations</div>
                      <div className='flex my-3 bg-white font-bold text-black border p-5 items-center'>Wordpress Development</div>
                      <div className='flex my-3 bg-white font-bold text-black border p-5 items-center'>Android Development</div>
                </div>
    </main>
  )
}

export default Services