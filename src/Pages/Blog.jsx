import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const blogRef = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(query(blogRef, orderBy("timestamp", "desc")));
      setBlogs(data.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description || "",
        author: doc.data().author,
        timestamp: doc.data().timestamp.toDate().toLocaleString(),
      })));
    };
    getBlogs();
  }, []);

  return (
    <main className='h-full bg-[#46567C] text-[#fff] p-10'>
      <h1 className='text-center my-4 text-4xl font-bold'>Blogs</h1>
      <hr className='bg-[#ED7D3B] w-[50%] h-1 m-auto'/>
      <div className='items-center flex flex-col'>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}

function BlogCard({ blog }) {
  const [showFullText, setShowFullText] = useState(false);
  
  const toggleReadMore = () => setShowFullText(!showFullText);

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(`Check out this blog: ${blog.title}`);

  return (
    <div className='border border-[#ED7D3B] m-4 p-4 rounded-xl w-full bg-white text-black'>
      <h2 className='text-4xl underline font-bold'>{blog.title}</h2>
      
      {/* Show first 5 lines, or full description when expanded */}
      <p className='my-2 whitespace-pre-line'>
        {showFullText ? blog.description : blog.description.split("\n").slice(0, 5).join("\n")}
      </p>

      {/* "Read More" button */}
      {blog.description.split("\n").length > 5 && (
        <button onClick={toggleReadMore} className="text-[#ED7D3B] underline">
          {showFullText ? "Read Less" : "Read More"}
        </button>
      )}

      <hr className='bg-[#ED7D3B] w-full my-4'/>
      <p className='text-sm'>Author: <span className='text-[#ED7D3B]'>{blog.author}</span></p>
      <p className='text-sm'>Date: <span className='text-[#ED7D3B]'>{blog.timestamp}</span></p>

      {/* Share Buttons */}
      <div className='mt-3 flex gap-4'>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
          <FaFacebook className='text-blue-600 text-2xl' />
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
          <FaTwitter className='text-blue-400 text-2xl' />
        </a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-blue-700 text-2xl' />
        </a>
      </div>
    </div>
  );
}

export default Blog;
