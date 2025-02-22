import React from 'react'
import SliderComponent from '../Components/SliderComponent';


function Reviews() {
  return (
   <main className=' text-[#fff] h-full rounded-xl shadow-lg shadow-[#7a5d4c] p-10  bg-[#46567C]  py-3 md:mx-20 m-3 '>
      
                  <h3 className='text-center font-bold text-4xl'>Reviews</h3>
                  <hr className='bg-white w-[80%] m-auto'/>
                  <div className='h-full p-10'>
                    <SliderComponent/>
                  </div>
          
   </main>
  )
}

export default Reviews