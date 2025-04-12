
import ReactMarkdown from "react-markdown";
import { FaWhatsapp, FaCopy } from 'react-icons/fa';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogCard({ blog }) {
    const [showFullText, setShowFullText] = useState(false);
    const toggleReadMore = () => setShowFullText(!showFullText);
  
    // Construct blog-specific share URL (assumes route like /blog/:id)
    const blogUrl = `${window.location.origin}/blogs/${blog.id}`;
    const encodedBlogUrl = encodeURIComponent(blogUrl);
    const encodedShareText = encodeURIComponent(`Check out this blog: ${blog.title}`);
  
    return (
      <div className="border border-[#ED7D3B] m-4 p-4 rounded-xl w-full bg-white text-black">
        <h2 className="text-4xl underline font-bold">{blog.title}</h2>
  
        <p className="my-2 whitespace-pre-line">
          <ReactMarkdown>
            {showFullText
              ? blog.description
              : blog.description.split('\n').slice(0, 5).join('\n')}
          </ReactMarkdown>
        </p>
  
        {blog.description.split('\n').length > 5 && (
          <button onClick={toggleReadMore} className="text-[#ED7D3B] underline">
            {showFullText ? 'Read Less' : 'Read More'}
          </button>
        )}
  
        <hr className="bg-[#ED7D3B] w-full my-4" />
  
        <p className="text-sm">Author: <span className="text-[#ED7D3B]">{blog.author}</span></p>
        <p>Email: <span className="text-[#ED7D3B]">{blog.email}</span></p>
        <p className="text-sm">Date: <span className="text-[#ED7D3B]">{blog.timestamp}</span></p>
  
        {/* Share Buttons */}
        <div className="mt-3 flex gap-4 items-center flex-wrap">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedBlogUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-600 text-2xl" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedBlogUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-blue-400 text-2xl" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedBlogUrl}&title=${encodedShareText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-700 text-2xl" />
          </a>
          <a
            href={`https://wa.me/?text=${encodedShareText}%20${encodedBlogUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-500 text-2xl" />
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText(blogUrl);
              toast.success('Link copied to clipboard!');
            }}
          >
            <FaCopy className="text-gray-600 text-2xl" />
          </button>
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
      </div>
    );
  }
  export default BlogCard;