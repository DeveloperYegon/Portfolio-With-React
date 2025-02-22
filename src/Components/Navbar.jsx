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
        <nav className='bg-[#fff] sticky top-0 w-full h-20 items-center text-[#182b5c] flex justify-around shadow-lg '>

            <div className='px-10text-[#ED7D3B] text-3xl'>
              <Link to="/">
              DeloperYegon
              </Link> 
              </div>
               <div >
                {/* <button onClick={handleToggle} className='px-10 md:hidden'>
                {isOpen ? <FaIcons.FaTimes onClick={side} className="hover:text-[#ED7D3B]" /> : <FaIcons.FaBars onClick={side} className="hover:text-[#ED7D3B]" />}
                </button> */}

               </div>
               {/* <div className= { ` ${ sidebar ?"":"-translate-x-full"} w-2/3 duration-300 top-[80px] fixed md:hidden`}>
                <Sidebar/>
             </div> */}
              <div className='text-xl px-5 py-2  rounded-full '>
                  <Link to="/blogs">Blogs</Link>
                </div>

             
    
        </nav>
  )
}

export default Navbar