import React from 'react'

import { FcLinux } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa6";
import { VscTools } from "react-icons/vsc";
import { TiVendorAndroid } from "react-icons/ti";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";


function Skills() {
  return (
   <main className='text-[#fff] h-full rounded-xl shadow-lg shadow-[#634939] mx-4 my-10 bg-[#46567C]  py-3 md:mx-20 px-3 md:h-full'>
   
            <h3 className='text-center text-4xl py-3'>Skills and Expertise</h3>
            <hr className='bg-[#ED7D3B] w-[50%] h-1 m-auto'/>

            <div className=' m-5'>
            <div className='border flex  flex-col md:flex-row gap-4 bg-white text-black my-3 p-5 items-center '>
            <VscTools className='text-[#ED7D3B] text-4xl' />
              <span className='font-bold text-center'>MERN Web Development</span> - ReactJs,ExpressJs, NodeJs, API Integrations, Tailwind CSS
              </div>
              <div className='my-3 flex flex-col md:flex-row gap-4 border p-5 items-center text-black bg-white'>
              <TiVendorAndroid className='text-[#ED7D3B] text-4xl' />
              <span className='font-bold text-center'>Android Development</span> - Java, Android Studio
              </div>
              

            <div className='bg-white flex flex-col md:flex-row  gap-4 text-black my-3 border  p-5 items-center '>
            <FaPython  className='text-[#ED7D3B] text-4xl'/>
            <span className='font-bold text-center'> Artificial Intellince and Machine Learning </span> - Python, Tensorflow, Keras, Scikit-learn
              </div>


            
            <div className=' flex flex-col md:flex-row  gap-4 border p-5 items-center my-3 bg-white text-black'>
            <FaDocker className='text-[#ED7D3B] text-4xl'/>
            <span className='font-bold text-center'>
              Containerization and Virtual Machines</span> - Docker </div>

            
            <div className=' flex flex-col md:flex-row gap-4 border p-5 items-center my-3 bg-white text-black'>< FaGitAlt  className='text-[#ED7D3B] text-4xl'  />
            <span className='font-bold text-center'> Version Control and CI/CD</span>- Github, Git, Github Actions</div>
            
            <div className='bg-white flex flex-col md:flex-row gap-4 text-black my-3 border p-5 items-center'><FaDatabase   className='text-[#ED7D3B] text-4xl'  />
            <span className='font-bold text-center'> Database Management </span>- MySQL, MongoDB, Cloud fireStore</div>
            <div className=' flex flex-col md:flex-row gap-4 border p-5 items-center my-3 bg-white text-black'>< FcLinux className='text-[#ED7D3B] text-4xl'/>
            <span className='font-bold text-center'> Unix  Operating System </span>-Kali linux and Ubuntu</div>
            </div>
            
   </main>
  )
}

export default Skills