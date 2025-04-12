import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



function Navbar() {
  const { currentUser } = useAuth();
 const auth = getAuth();

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
        await signOut(auth);
        toast.success("Logged out successfully!");
        navigate("/login"); // Redirect to login page
    } catch (error) {
        console.error(error);
        toast.error("Error signing out. Please try again.");
    }
  }
  return (
    <nav className='bg-[#fff] sticky top-0 w-full h-20 flex justify-around items-center px-10 shadow-lg text-[#182b5c]'>
      {/* Brand Logo */}
      <div className='text-[#ED7D3B] text-3xl font-bold'>
        <Link to="/">DeloperYegon</Link>
      </div>

      {/* Navigation Links */}
      <div className='text-xl flex gap-6 items-center'>
        {currentUser ? (
          <>
            <span className='font-semibold hidden md:flex'>Hello, {currentUser.email}!!  </span>
            <Link to="/blogs" className='font-bold px-2 py-2 bg-white  text-black'>Blogs</Link>
            <p onClick={handleSignOut} className='font-bold  px-2 py-2 bg-white  text-red-500'>Logout</p>
          </>
        ) : (
          <>
            <Link to="/blogs" className='font-bold'>Blogs</Link>
          </>
        )}
      </div>
       <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
    </nav>
  );
}

export default Navbar;
