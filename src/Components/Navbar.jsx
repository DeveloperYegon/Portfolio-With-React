import React from 'react'
import * as FaIcons from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import { useState , useEffect} from "react";


function Navbar() {

  const [sidebar, setSidebar] = React.useState(false);
  const side = ()=>setSidebar(!sidebar);

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
        <nav className='bg-[#fff] sticky top-0 w-full h-20 items-center text-[#182b5c] flex justify-between shadow-lg '>

            <div className='px-10 hover:text-[#ED7D3B] text-3xl'>
              <Link to="/">
              DeloperYegon
              </Link> 
              </div>

        
              
              <div>
              <ul className='items-center hidden md:flex text-xl'>
                    <li className='px-3 hover:text-[#ED7D3B]'>
                      <Link to="/">
                      Home
                      </Link> 
                      </li>
                    <li className='px-3 hover:text-[#ED7D3B]'>
                      <Link to="/projects ">Projects</Link> </li>
                      {/* <li className='px-3 hover:text-[#ED7D3B]'>
                      <Link to="/services">Services</Link> </li> */}
                    <li className='px-3 hover:text-[#ED7D3B] '>
                      <Link to="/blogs">Blogs</Link> </li>
                      <li className='px-3 hover:text-[#ED7D3B]'>
                        <Link to="/contact">Contact</Link>
                        </li>
                        <li className='px-3 hover:text-[#ED7D3B]'>
                        <Link to="/donate">Donate</Link>
                        </li>
                </ul>
              </div>
            

               <div >
                <button onClick={handleToggle} className='px-10 md:hidden'>
                {isOpen ? <FaIcons.FaTimes onClick={side} className="hover:text-[#ED7D3B]" /> : <FaIcons.FaBars onClick={side} className="hover:text-[#ED7D3B]" />}
                </button>

               </div>
               <div className= { ` ${ sidebar ?"":"-translate-x-full"} w-2/3 duration-300 top-[80px] fixed md:hidden`}>
                <Sidebar/>
             </div>
              <div className='hidden md:flex text-xl px-5 py-1 rounded-full bg-[#ED7D3B]'>
                  <Link to="/login"><CiLogin /></Link>
                </div>

             
    
        </nav>
  )
}

export default Navbar