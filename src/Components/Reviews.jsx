import React from 'react'
import SliderComponent from '../Components/SliderComponent';


function Reviews() {
  return (
   <main className=' text-[#fff] h-50vh rounded-xl shadow-lg shadow-[#7a5d4c] p-10  bg-[#46567C]  py-3 md:mx-20 m-3 '>
      
                  <h3 className='text-center font-bold text-4xl py-4'>Educational Background</h3>
                  <hr className='bg-[#ED7D3B] h-1 w-[50%] m-auto'/>
                  <div className='h-full p-5'>
                    <SliderComponent/>
                  </div>
          
   </main>
  )
}

export default Reviews  