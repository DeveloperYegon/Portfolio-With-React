// src/Components/BlogCard.jsx
import ReactMarkdown from 'react-markdown';
import { FaWhatsapp, FaCopy, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogCard({ blog, isFullWidth = false }) {
  const [showFullText, setShowFullText] = useState(false);
  const { id } = useParams();

  const toggleReadMore = () => setShowFullText(!showFullText);

  const productionDomain = 'https://yegon.datany.online';
  const blogId = blog.id || id;
  const blogUrl = `${productionDomain}/blogs/${blogId}`;
  const encodedBlogUrl = encodeURIComponent(blogUrl);
  const encodedShareText = encodeURIComponent(`Check out this blog: ${blog.title}`);

  return (
    <div
      className={`border border-[#ED7D3B] m-4 p-6 rounded-xl bg-white text-black shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        isFullWidth
          ? 'cursor-default' // Disable cursor pointer for full-width view
          : 'cursor-pointer h-[400px] flex flex-col overflow-hidden' // Grid view
      }`}
    >
      <h2
        className={`font-bold underline mb-4 ${
          isFullWidth ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl line-clamp-2'
        }`}
      >
        {blog.title}
      </h2>

      <div
        className={`my-4 whitespace-pre-line ${
          isFullWidth ? 'text-base sm:text-lg leading-relaxed' : 'flex-1 overflow-y-auto'
        }`}
      >
        <ReactMarkdown>
          {showFullText
            ? blog.description
            : blog.description.split('\n').slice(0, 5).join('\n')}
        </ReactMarkdown>
      </div>

      {blog.description.split('\n').length > 5 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleReadMore();
          }}
          className="text-[#ED7D3B] underline hover:text-[#d66c2e] transition-colors duration-300"
        >
          {showFullText ? 'Read Less' : 'Read More'}
        </button>
      )}

      <hr className="bg-[#ED7D3B] w-full my-6 h-1 rounded" />

      <p className={`text-sm ${isFullWidth ? '' : 'truncate'}`}>
        Author: <span className="text-[#ED7D3B] font-semibold">{blog.author}</span>
      </p>
      <p className={`text-sm ${isFullWidth ? '' : 'truncate'}`}>
        Email: <span className="text-[#ED7D3B] font-semibold">{blog.email}</span>
      </p>
      <p className={`text-sm ${isFullWidth ? '' : 'truncate'}`}>
        Date: <span className="text-[#ED7D3B] font-semibold">{blog.timestamp}</span>
      </p>

      <div className="mt-4 flex gap-4 items-center flex-wrap">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedBlogUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label="Share on Facebook"
        >
          <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedBlogUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label="Share on Twitter"
        >
          <FaTwitter className="text-blue-400 text-2xl hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedBlogUrl}&title=${encodedShareText}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin className="text-blue-700 text-2xl hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href={`https://wa.me/?text=${encodedShareText}%20${encodedBlogUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="text-green-500 text-2xl hover:scale-110 transition-transform duration-300" />
        </a>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(blogUrl);
            toast.success('Link copied to clipboard!', { position: 'top-center' });
          }}
          aria-label="Copy blog link"
        >
          <FaCopy className="text-gray-600 text-2xl hover:scale-110 transition-transform duration-300" />
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