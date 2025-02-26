import React from 'react'

function ProjectPage() {
  return (
    <main className='text-[#fff] h-full my-10 rounded-xl shadow-lg shadow-[#7a5d4c] p-10  bg-[#46567C]  py-3 md:mx-20 m-4'>

      <h1 className='text-center text-4xl py-4  '>Projects</h1>
      <hr className='m-auto w-[50%] h-1 bg-[#ED7D3B]' />

    <div className='h-full py-4 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='border p-3'>Llama 2 70B Finetune</div>
      <div  className='border p-3'>Gemini Clone</div>
      <div  className='border p-3'>Rai Alliance</div>
      <div  className='border p-3'>Tilt Technologies</div>
    </div>
      



    </main>
  )
}

export default ProjectPage