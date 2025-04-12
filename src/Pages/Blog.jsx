// src/pages/Blog.js
import React, { useState, useContext } from 'react';
import {
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import Modal from './Modal';
import { useAuth } from '../contexts/AuthContext';
import { BlogContext } from '../contexts/BlogContext';
import BlogCard from '../Components/BlogCard';

function Blog() {
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });
  const { blogs, getBlogs } = useContext(BlogContext);
  const { currentUser } = useAuth();

  // Handlers
  const handleEditClick = (blog) => {
    setEditingBlog(blog);
    setEditForm({ title: blog.title, description: blog.description });
    setShowModal(true);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const blogDoc = doc(db, 'blogs', editingBlog.id);
      await updateDoc(blogDoc, {
        title: editForm.title,
        description: editForm.description,
      });

      setShowModal(false);
      setEditingBlog(null);
      await getBlogs(); // Refresh blogs
    } catch (error) {
      console.error('Failed to update blog:', error);
    }
  };

  return (
    <main className="h-full bg-[#46567C] text-white md:p-10">
      <h1 className="text-center my-4 text-4xl font-bold">Blogs</h1>
      <hr className="bg-[#ED7D3B] w-[50%] h-1 m-auto" />

      <div className="flex flex-col items-center">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative w-full">
            <BlogCard blog={blog} />
            {currentUser && (
              <button
                onClick={() => handleEditClick(blog)}
                className="absolute m-3 top-4 right-6 bg-[#ED7D3B] text-white px-4 py-1 rounded"
              >
                Edit
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal for Editing */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl text-[#ED7D3B] mt-5 text-center font-bold mb-4">Edit Blog</h2>
        <hr className='h-1 bg-black m-auto w-[50%]' />
        <form onSubmit={handleEditSubmit} className="flex w-full flex-col p-10">
          <label className='my-4 text-black font-bold' htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editForm.title}
            onChange={handleEditChange}
            className="border p-2 text-black border-[#000] rounded-lg"
            placeholder="Title"
            required
          />
          <label className='my-4 font-bold text-black' htmlFor="desc">Description:</label>
          <textarea
            name="description"
            id="desc"
            value={editForm.description}
            onChange={handleEditChange}
            className="border border-[#000] p-2 text-black h-40"
            placeholder="Description"
            required
          />
          <button
            type="submit"
            className="bg-[#ED7D3B] text-white px-4 my-5 py-2 rounded"
          >
            Update Blog
          </button>
        </form>
      </Modal>
    </main>
  );
}

export default Blog;
