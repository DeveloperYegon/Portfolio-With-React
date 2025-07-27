import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getAuth, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';

function Navbar() {
  const { currentUser } = useAuth();
  const auth = getAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      toast.error('Error signing out. Please try again.');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Non-Sticky Title Bar */}
      <div className="bg-[#182B5C] text-white py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4">
            <Link
              to="mailto:gideonyegon404@gmail.com"
              className="flex items-center gap-2 text-sm sm:text-base hover:text-[#ED7D3B] transition-colors duration-300"
            >
              <MdEmail className="text-[#ED7D3B]" />
              gideonyegon404@gmail.com
            </Link>
            <Link
              to="tel:+254-712-269-086"
              className="flex items-center gap-2 text-sm sm:text-base hover:text-[#ED7D3B] transition-colors duration-300"
            >
              <IoCall className="text-[#ED7D3B]" />
              +254712269086
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="https://linkedin.com/in/-gideon-yegon"
              className="text-[#ED7D3B] hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <ImLinkedin className="h-5 w-5" />
            </Link>
            <Link
              to="https://github.com/DeveloperYegon/"
              className="text-[#ED7D3B] hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              to="https://medium.com/@developeryegon"
              className="text-[#ED7D3B] hover:text-white transition-colors duration-300"
              aria-label="Medium"
            >
              <FaMedium className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50 w-full shadow-lg text-[#182B5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand Logo */}
            <div className="text-[#ED7D3B] text-2xl sm:text-3xl font-bold">
              <Link to="/">DeloperYegon</Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 text-lg">
              {currentUser ? (
                <>
                  <span className="font-semibold text-[#182B5C]">
                    Hello, {currentUser.email}!
                  </span>
                  <Link
                    to="/blogs"
                    className="px-3 py-2 font-bold text-[#182B5C] hover:text-[#ED7D3B] transition-colors duration-300"
                  >
                    Blogs
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="px-3 py-2 font-bold text-red-500 hover:text-red-600 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/blogs"
                  className="px-3 py-2 font-bold text-[#182B5C] hover:text-[#ED7D3B] transition-colors duration-300"
                >
                  Blogs
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-[#182B5C] focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="flex flex-col items-center py-4 gap-4">
                {currentUser ? (
                  <>
                    <span className="font-semibold text-[#182B5C]">
                      Hello, {currentUser.email}!
                    </span>
                    <Link
                      to="/blogs"
                      onClick={toggleMobileMenu}
                      className="font-bold text-[#182B5C] hover:text-[#ED7D3B] transition-colors duration-300"
                    >
                      Blogs
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        toggleMobileMenu();
                      }}
                      className="font-bold text-red-500 hover:text-red-600 transition-colors duration-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/blogs"
                    onClick={toggleMobileMenu}
                    className="font-bold text-[#182B5C] hover:text-[#ED7D3B] transition-colors duration-300"
                  >
                    Blogs
                  </Link>
                )}
              </div>
            </div>
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
    </>
  );
}

export default Navbar;