import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

function Footer() {
  const year= new Date().getFullYear();
  return (
    <footer className='bg-[#182B5C] py-10 text-[#fff]'>
        <hr className='h-1 bg-[#fff] w-[50%] m-auto'/>

      <div className='flex justify-around '>
                    
                     <ul className='flex flex-col items-center md:flex-row gap-2 p-2 m-5'>
                     
                      <li><Link to='tel:+254-712-269-086'><p className='flex items-center gap-2 p-2 border m-5'><IoCall /> &nbsp; 0712269086</p></Link>
                     </li>
                      <li>  <Link to='mailto:gideonyegon404@gmail.com'><p className='text-center flex items-center gap-2 p-2 border m-5'><MdEmail />gideonyegon404@gmail.com</p></Link></li>
                      <li>  <Link to='mailto:gideonyegon404@gmail.com'><p className='text-center flex items-center gap-2 p-2 border m-5'><ImLinkedin/></p></Link></li>
                      <li>  <Link to='https://github.com/DeveloperYegon/'><p className='text-center flex items-center gap-2 p-2 border m-5'><FaGithub/></p></Link></li>
                      <li>  <Link to='https://medium.com/@developeryegon'><p className='text-center flex items-center gap-2 p-2 border m-5'><FaMedium/></p></Link></li>
    
                      <li> </li>
                     </ul>
                  </div>
                  <hr className='w-[80%] m-auto'  />
      <p className='text-center p-5'>&copy;{year}, DeveloperYegon. All Rights Are Reserved. </p>

    </footer>
  )
}

export default Footer