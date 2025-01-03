import React from 'react'
import SliderComponent from '../Components/SliderComponent';


function Reviews() {
  return (
   <main className=' text-white mx-4 md:mx-20 my-10 rounded-xl bg-[#182B5C]  py-3 px-3  h-full'>
      
                  <h3 className='text-center'>Reviews</h3>
                  <hr className='bg-white w-[80%] m-auto'/>
                  <div className='h-full p-10'>
                    <SliderComponent/>
                  </div>
          
   </main>
  )
}

export default Reviews