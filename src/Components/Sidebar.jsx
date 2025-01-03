import React from 'react'
import { Link } from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";


function Sidebar() {
  return (
    <div className='mt-3  py-10 bg-[#fff] rounded text-[#182B5C] h-full'>
      <ul className='text-center text-xl'>
      <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
            <Link to="/">Home</Link>
            </li>
         
          <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
            <Link to="/projects">Projects</Link>
          
            </li>
          <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
            <Link to="/donate">Donate</Link></li>
            
          <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
          <Link to="/contact">Contact</Link>  
          </li>
          <li className='py-2 w-1/2 m-auto rounded-xl text-center bg-[#ED7D3B] text-[#000]'>
          <Link className='flex justify-around text-3xl' to="/login"><CiLogin /></Link>

          </li>
          
      </ul>
      
        <h3 className='text-center pt-8 text-[#ED7D3B] text-xl'>Join our Community</h3>
        
        <hr className='m-4' />
        
        <ul className='flex gap-2 justify-around'>
          <li className='border  rounded'>
            <Link to="https://www.linkedin.com/in/developer-yegon/"></Link> < ImLinkedin className='hover:bg-[#ED7D3B]'/> </li>
          <li className='border  rounded'><FaSquareInstagram className=' hover:bg-[#ED7D3B]'/></li>
          <li className='border  rounded'><FaTwitterSquare className=' hover:bg-[#ED7D3B]' /></li>
          <li className='border rounded'><FaFacebookSquare className=' hover:bg-[#ED7D3B]'/></li>
        </ul>
    
      </div>
  )
}

export default Sidebar