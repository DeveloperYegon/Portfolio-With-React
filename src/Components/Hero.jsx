import React, { useState } from 'react';
import myProfile from '../assets/GideonYegon.jpg';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';
import Modal from '../Pages/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/resume @Yegon.pdf');
      if (!response.ok) {
        throw new Error('Failed to fetch the resume file.');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume @Yegon.pdf'; // File name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // Clean up

      toast.success('Resume downloaded successfully!', { position: 'top-center' });
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download resume. Please try again.', { position: 'top-center' });
    } finally {
      setIsDownloading(false);
    }
  };

  const getGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour < 12 ? 'Good Morning!' : hour < 18 ? 'Good Afternoon!' : 'Good Evening!';
  };
  const wavingHandEmoji = '\u{1F44B}';

  return (
    <main className="text-white min-h-screen flex items-center justify-center bg-gradient-to-br from-[#182B5C] to-[#46567C] py-8 px-4 sm:px-6 lg:px-8">
     
      <div className="max-w-5xl w-full mx-auto bg-[#46567C]/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-10">
        {/* Utility Bar */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
          <Link
            to="mailto:gideonyegon404@gmail.com"
            className="flex items-center gap-2 text-sm sm:text-base text-white hover:text-[#ED7D3B] transition-colors duration-300"
          >
            <MdEmail className="text-[#ED7D3B]" />
            gideonyegon404@gmail.com
          </Link>
          <Link
            to="tel:+254-712-269-086"
            className="flex items-center gap-2 text-sm sm:text-base text-white hover:text-[#ED7D3B] transition-colors duration-300"
          >
            <IoCall className="text-[#ED7D3B]" />
            +254712269086
          </Link>
          <Link
            to="https://linkedin.com/in/-gideon-yegon"
            className="flex items-center gap-2 text-sm sm:text-base text-white hover:text-[#ED7D3B] transition-colors duration-300"
          >
            <ImLinkedin className="text-[#ED7D3B]" />
            LinkedIn
          </Link>
          <Link
            to="https://github.com/DeveloperYegon/"
            className="flex items-center gap-2 text-sm sm:text-base text-white hover:text-[#ED7D3B] transition-colors duration-300"
          >
            <FaGithub className="text-[#ED7D3B]" />
            GitHub
          </Link>
          <Link
            to="https://medium.com/@developeryegon"
            className="flex items-center gap-2 text-sm sm:text-base text-white hover:text-[#ED7D3B] transition-colors duration-300"
          >
            <FaMedium className="text-[#ED7D3B]" />
            Medium
          </Link>
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center mb-6">
          <img
            src={myProfile}
            className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 rounded-full border-4 border-[#ED7D3B] object-cover"
            alt="Gideon Yegon Profile"
          />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getGreeting()} {wavingHandEmoji}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
            I'm <span className="text-[#ED7D3B]">Gideon Kipkorir Yegon</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
            A passionate and detail-oriented software developer with over 4 years of experience specializing in the MERN stack and Android app development. I excel in building scalable, user-friendly applications with expertise in React, Node.js, Express, MongoDB, and TypeScript, complemented by a strong grasp of UI/UX principles and responsive design.
          </p>
          <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Beyond coding, I’m dedicated to continuous learning and innovation, always exploring new technologies to stay ahead in the fast-evolving tech space. I thrive in collaborative environments, solving complex problems and delivering impactful digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`px-6 py-3 rounded-lg text-white font-semibold ${
                isDownloading
                  ? 'bg-[#ED7D3B]/50 cursor-not-allowed'
                  : 'bg-[#ED7D3B] hover:bg-[#d66c2e]'
              } transition-colors duration-300`}
            >
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </button>
            
            <button
              onClick={openModal}
              className="bg-transparent border-2 border-[#ED7D3B] text-[#ED7D3B] px-6 py-3 rounded-lg hover:bg-[#ED7D3B] hover:text-white transition-colors duration-300"
            >
              Contact Me
            </button>

          </div>
        </div>

        {/* Modal */}
        <Modal show={showModal} onClose={closeModal}>
          <h3 className="text-center text-[#ED7D3B] font-bold text-xl sm:text-2xl py-5">
            Connect with Me
          </h3>
          <hr className="w-1/2 mx-auto h-1 bg-[#ED7D3B]/20 mb-6" />
          <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 p-4">
            <li>
              <Link
                to="mailto:gideonyegon404@gmail.com"
                className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <MdEmail className="text-[#ED7D3B]" />
                <span className="text-black font-bold">gideonyegon404@gmail.com</span>
              </Link>
            </li>
            <li>
              <Link
                to="tel:+254-712-269-086"
                className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <IoCall className="text-[#ED7D3B]" />
                <span className="text-black font-bold">+254712269086</span>
              </Link>
            </li>
            <li>
              <Link
                to="https://linkedin.com/in/-gideon-yegon"
                className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <ImLinkedin className="text-[#ED7D3B]" />
                <span className="text-black font-bold">LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/DeveloperYegon/"
                className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <FaGithub className="text-[#ED7D3B]" />
                <span className="text-black font-bold">GitHub</span>
              </Link>
            </li>
            <li>
              <Link
                to="https://medium.com/@developeryegon"
                className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <FaMedium className="text-[#ED7D3B]" />
                <span className="text-black font-bold">Medium</span>
              </Link>
            </li>
          </ul>
        </Modal>
      </div>
    </main>
  );
}

export default Hero;