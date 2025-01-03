import React from 'react'

import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { FaPython } from "react-icons/fa6";   
import { SiMysql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  return (
   <main className='text-[#fff] rounded-xl mx-4 my-10 bg-[#182B5C]  py-3 md:mx-20 px-3 md:h-full'>
   
            <h3 className='text-center text-2xl'>Skills and Expertise</h3>
            <hr className='bg-white w-[80%] h-1 m-auto'/>

            <div className='grid md:grid-cols-4 m-10 gap-5'>
            <div className='flex border p-5 items-center gap-5'><FaReact className='' /> React JS</div>
            <div className='flex border  p-5 items-center gap-5'><FcLinux />Linux</div>
            <div className='flex border p-5 items-center gap-5'><FaGitAlt />Version Control</div>
            <div className='flex border p-5 items-center gap-5'> <IoLogoHtml5 />HTML5</div>
            <div className='flex border p-5 items-center gap-5'><FaPython />Python</div>
            <div className='flex border p-5 items-center gap-5'><RiTailwindCssFill />Tailwind Css</div>
            <div className='flex border p-5 items-center gap-5'><TbBrandJavascript />Javascript</div>
            <div className='flex border p-5 items-center gap-5'><SiMysql />MySql</div>
            <div className='flex border p-5 items-center gap-5'><FaWordpress />WordPress</div>
            </div>
            
   </main>
  )
}

export default Skills