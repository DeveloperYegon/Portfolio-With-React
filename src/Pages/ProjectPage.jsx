import React,{useState} from 'react'
import chatbot from '../assets/chatty.png'
import beautify from '../assets/beautifyai.png'
import rai from '../assets/rai.png'
import tilted from '../assets/tilted.png'
import Modal from "../Pages/Modal"


function ProjectPage() {
   const [showModal, setShowModal] = useState(false);
    
      const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

  return (
    <main className='text-[#fff] h-full my-10 rounded-xl shadow-lg shadow-[#7a5d4c] p-10  bg-[#46567C]  py-3 md:mx-20 m-4'>

      <h1 className='text-center text-4xl py-4  '>Projects</h1>
      <hr className='m-auto w-[50%] h-1 bg-[#ED7D3B]' />

    <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 m-5'>
      <div className='border p-3 rounded-xl'> 
        <img src={chatbot} alt="" />
        <p  onClick={openModal} className='text-center rounded-xl cursor-pointer bg-[#000] font-bold p-3 m-3'>
        Text Generation Chatbot
        </p>
        <Modal show={showModal} onClose={closeModal}>
        <div className='text-center m-20'>

          <p className='text-black'>Text Generation Chatbot</p>
          <hr className='m-auto w-[50%] h-1 bg-[#ED7D3B]' />

          <img src={chatbot}  alt="" />
          <p className='text-black'>
            This is a web application that gemini-flash model API to generate text based on the user's input.   

          </p>
          </div>
        </Modal>
        </div>

      <div  className='border p-3 rounded-xl'>
        <img src={beautify} alt="" />
        <p onClick={openModal} className='text-center rounded-xl cursor-pointer bg-[#000] font-bold p-3 m-3'>
        Beautify AI
        </p>
        <Modal show={showModal} onClose={closeModal}>
        <div className='text-center m-20'>

          <p className='text-black'>Tilt Technologies</p>
          <p className='text-black'>
            This is a web application that uses the GPT-3 model to generate text based on the user's input.   

          </p>
          </div>
        </Modal>
        </div>
      <div  className='border rounded-xl p-3'>
        <img src={rai} alt="" /> 
        <p onClick={openModal} className='text-center cursor-pointer rounded-xl bg-[#000] font-bold p-3 m-3'>
        Rai Alliance
        </p>
        <Modal show={showModal} onClose={closeModal}>
        <div className='text-center m-20'>

<p className='text-black'>Tilt Technologies</p>
<p className='text-black'>
  This is a web application that uses the GPT-3 model to generate text based on the user's input.   

</p>
</div>
        </Modal>
        </div>
      <div  className='border rounded-xl p-3'>
        <img src={tilted} alt="" />
        <p onClick={openModal} className='text-center rounded-xl cursor-pointer bg-[#000] font-bold p-3 m-3'>
        Tilt Technologies
        </p>
        <Modal show={showModal} onClose={closeModal}>
          <div className='text-center m-20'>

          <p className='text-black'>Tilt Technologies</p>
          <p className='text-black'>
            This is a web application that uses the GPT-3 model to generate text based on the user's input.   

          </p>
          </div>
        </Modal>
        </div>
    </div>
      



    </main>
  )
}

export default ProjectPage