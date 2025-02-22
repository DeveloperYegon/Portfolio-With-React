import React from 'react'
import myProfile from '../assets/GideonYegon.jpg'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";




function Hero() {
    const getGreeting = () => {
        const now = new Date();
        const hour = now.getHours();
      
        if (hour < 12) {
          return 'Good Morning!';
        } else if (hour < 18) {
          return 'Good Afternoon!';
        } else {
          return 'Good Evening!';
        }
      };
      const wavingHandEmoji = '\u{1F44B}';
    
  return (
   <main className='text-[#fff] h-full rounded-xl shadow-lg shadow-[#7a5d4c] p-10  bg-[#46567C]  py-3 md:mx-20 m-3 '>

            <div className='  bg-[#46567c] w-full p-5 flex justify-around rounded-lg'>
              <img src={myProfile} className=' border h-[200px] w-[200px]  border-[#ED7D3B] rounded-[50%]' alt="" />
            </div>

            <div className='text-[#fff] rounded-[10px]  bg-[#46567c]' >
              <p className='md:p-9'>
                <p>{getGreeting()} {wavingHandEmoji}</p>
                <p className=''>
                    <strong>Gideon Kipkorir Yegon here,</strong> <br />
                    A  <strong>Software Engineer</strong> with 3+ years of interacting with software engineering tools.
                    I have delved into building and development of softwares to enhace smooth business operations in the technology world. 
                    </p>
                    <p className=''>
                    My greatest strength is collaborating and driving effectiveness across teams.
                    I have talent for designing and developing systems to successfully launch technology products.
                    </p>
                    <p className=''>
                    I am passionate about scraping innovations using technology products including web and mobile development.
                    
                    </p>
                    <p className=''>
                    I value being collaborative, inclusive, authentic and having fun  when doing it.
                    </p>
              </p>
              <div className='flex  justify-around'>
                
                 <ul className='flex md:flex-row flex-col  items-center gap-2 p-2 m-5'>
                 <li ><p className='flex bg-[#ED7d3b] items-center gap-2 p-2 border m-5'> Download CV</p>
                 </li>
                  <li><Link to='tel:+254-712-269-086'><p className='flex items-center gap-2 p-2 border m-5'><IoCall /> &nbsp; 0712269086</p></Link>
                 </li>
                  <li>  <Link to='mailto:gideonyegon404@gmail.com'><p className='text-center flex items-center gap-2 p-2 border m-5'><MdEmail />gideonyegon404@gmail.com</p></Link></li>
                  <li>  <Link to='mailto:gideonyegon404@gmail.com'><p className='text-center flex items-center gap-2 p-2 border m-5'><ImLinkedin/></p></Link></li>
                  <li>  <Link to='https://github.com/DeveloperYegon/'><p className='text-center flex items-center gap-2 p-2 border m-5'><FaGithub/></p></Link></li>
                  <li>  <Link to='https://medium.com/@developeryegon'><p className='text-center flex items-center gap-2 p-2 border m-5'><FaMedium/></p></Link></li>

                  <li> </li>
                 </ul>
              </div>
          </div>
   </main>
  )
}

export default Hero