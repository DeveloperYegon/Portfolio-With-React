import React,{useState} from 'react'
import myProfile from '../assets/GideonYegon.jpg'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import Modal from "../Pages/Modal"





function Hero() {

    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

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

                    A passionate and detail-oriented software developer with 4+ years experience expertised in the MERN stack and Android app development. With a strong foundation in frontend and backend technologies, I thrive in building scalable, user-friendly applications that enhance digital experiences. My expertise spans React, Node.js, Express, MongoDB, and TypeScript, alongside a deep understanding of UI/UX principles and responsive design.
            <p className='py-4'>

                    Beyond coding, I am committed to continuous learning and innovation, always exploring new technologies to stay ahead in the fast-evolving tech space. I enjoy collaborating with teams to solve complex problems, optimize performance, and create impactful digital solutions. Whether it's developing dynamic web applications or crafting intuitive mobile apps, I am dedicated to delivering excellence and pushing the boundaries of what technology can achieve.
                   
            </p>
                    </p>
                   
              </p>
              <div className='flex   items-center justify-center'>
                  <p className='bg-[#ED7d3b] p-2 m-5 rounded-lg'>
                    <a  href='/../assets/cv@Gideon Kipkorir Yegon.pdf'
                      download="cv@Gideon Kipkorir Yegon.pdf">
                    Download Resume
                        </a>
                    </p>
                 
                 <div className='flex flex-col items-center'>
                 <button className='bg-[#ED7d3b] p-2 m-5 rounded-lg' onClick={openModal}>Contact Me</button>
                 {/* {showModal && <Modal onClose={closeModal} />} */}
                 <Modal show={showModal} onClose={closeModal}>
                    <p className='text-center text-[#ED7D3B] font-bold  text-2xl py-5'>Contact me on any of the platforms below</p>
                    <hr className='w-[50%] m-auto h-1  bg-black'/>

                  <ul className='flex  border md:flex-row flex-col text-black items-center gap-2 p-2 m-5'>                 
                  <li>  <Link to='mailto:gideonyegon404@gmail.com'><p className='text-center flex items-center gap-2 p-2 border border-slate-950 rounded-lg m-5'><MdEmail />gideonyegon404@gmail.com</p></Link></li>

                  <li><Link to='tel:+254-712-269-086'><p className='text-center flex items-center gap-2 p-2 border border-slate-950 rounded-lg m-5'><IoCall />+254712269086</p></Link>
                  </li>
                  <li>  <Link to='https://linkedin.com/in/-gideon-yegon'><p className='text-center flex items-center gap-2 p-2 border border-slate-950 rounded-lg m-5'><ImLinkedin/></p></Link></li>

                  <li>  <Link to='https://github.com/DeveloperYegon/'><p className='text-center flex items-center gap-2 p-2 border border-slate-950 rounded-lg m-5'><FaGithub/></p></Link></li>

                  <li>  <Link to='https://medium.com/@developeryegon'><p className='text-center flex items-center gap-2 p-2 border border-slate-950 rounded-lg m-5'><FaMedium/></p></Link></li>

                  <li> </li>
                 </ul>
                 </Modal>

                 </div>
              </div>
          </div>
   </main>
  )
}

export default Hero