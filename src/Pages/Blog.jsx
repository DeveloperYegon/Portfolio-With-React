// src/pages/Blog.js
import React, { useState, useContext, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Modal from './Modal';
import { useAuth } from '../contexts/AuthContext';
import { BlogContext } from '../contexts/BlogContext';
import BlogCard from '../Components/BlogCard';
import { Link } from 'react-router-dom';

function Blog() {
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const { blogs, fetchBlogs, hasMore, loading } = useContext(BlogContext);
  const { currentUser } = useAuth();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(
        blogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, blogs]);

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
      fetchBlogs(1);
      setPage(1);
    } catch (error) {
      console.error('Failed to update blog:', error);
    }
  };

  const loadMoreBlogs = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchBlogs(nextPage);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#182B5C] to-[#46567C] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
          Blogs
        </h1>
        <hr className="w-1/2 mx-auto h-1 bg-[#ED7D3B] rounded mb-8" />

        <div className="mb-8 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search blogs by title..."
            className="w-full max-w-md p-3 rounded-xl bg-white/10 border border-[#ED7D3B]/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED7D3B] transition-all duration-300"
            aria-label="Search blogs by title"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="relative">
                <Link to={`/blogs/${blog.id}`}>
                  <BlogCard blog={blog} />
                </Link>
                {currentUser && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleEditClick(blog);
                    }}
                    className="absolute top-4 right-4 bg-[#ED7D3B] text-white px-4 py-1 rounded-lg hover:bg-[#d66c2e] transition-colors duration-300"
                    aria-label="Edit this blog"
                  >
                    Edit
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-white col-span-3">No blogs found.</p>
          )}
        </div>

        {hasMore && !loading && filteredBlogs.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreBlogs}
              className="bg-[#ED7D3B] text-white px-6 py-3 rounded-lg hover:bg-[#d66c2e] transition-colors duration-300"
              aria-label="Load more blogs"
            >
              Load More
            </button>
          </div>
        )}
        {loading && (
          <div className="text-center mt-8 text-white">Loading...</div>
        )}

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2 className="text-xl sm:text-2xl text-[#ED7D3B] mt-5 text-center font-bold mb-4">
            Edit Blog
          </h2>
          <hr className="h-1 bg-[#ED7D3B]/20 m-auto w-1/2 mb-6" />
          <form onSubmit={handleEditSubmit} className="flex flex-col p-6 sm:p-10 space-y-6">
            <label htmlFor="title" className="text-black font-bold text-sm">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editForm.title}
              onChange={handleEditChange}
              className="border border-[#000] p-3 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED7D3B] transition-all duration-300"
              placeholder="Title"
              required
            />
            <label htmlFor="desc" className="text-black font-bold text-sm">
              Description:
            </label>
            <textarea
              name="description"
              id="desc"
              value={editForm.description}
              onChange={handleEditChange}
              className="border border-[#000] p-3 text-black rounded-xl h-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#ED7D3B] transition-all duration-300"
              placeholder="Description (Markdown supported)"
              required
            />
            <button
              type="submit"
              className="bg-[#ED7D3B] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#d66c2e] transition-colors duration-300"
            >
              Update Blog
            </button>
          </form>
        </Modal>
      </div>
    </main>
  );
}

export default Blog;