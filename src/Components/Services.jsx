import React from 'react'

function Services() {
  return (
    <main>
         <div className=' text-white mx-4 md:mx-20 my-10 rounded-xl bg-[#182B5C]  py-3 px-3  h-full'>
                  <h3 className='text-center text-2xl'>Services</h3>
                  <hr className='bg-white w-[80%] h-1 m-auto'/>
                <div className='grid md:grid-cols-2 m-10 gap-5'>
                      <div className='flex border p-5 items-center gap-5'>Web Development</div>
                      <div className='flex border p-5 items-center gap-5'>Chatbot Integrations</div>
                      <div className='flex border p-5 items-center gap-5'>Wordpress Development</div>
                </div>
          </div>
    </main>
  )
}

export default Services