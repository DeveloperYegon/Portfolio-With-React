// src/Components/BlogDetails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import BlogCard from './BlogCard';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const blogDoc = doc(db, 'blogs', id);
        const blogSnapshot = await getDoc(blogDoc);

        if (blogSnapshot.exists()) {
          const blogData = blogSnapshot.data();
          setBlog({
            id: blogSnapshot.id,
            title: blogData.title,
            description: blogData.description || '',
            author: blogData.author,
            email: blogData.authorMail,
            timestamp: blogData.timestamp?.toDate().toLocaleString(),
          });
        } else {
          setError('Blog not found.');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load the blog. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#182B5C] to-[#46567C] text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#182B5C] to-[#46567C] text-red-500 p-10">
        {error} <Link to="/blogs" className="text-[#ED7D3B] underline ml-2">Back to Blogs</Link>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#182B5C] to-[#46567C] text-red-500 p-10">
        Blog not found. <Link to="/blogs" className="text-[#ED7D3B] underline ml-2">Back to Blogs</Link>
      </div>
    );
  }

  const metaDescription = blog.description.length > 160
    ? `${blog.description.substring(0, 157)}...`
    : blog.description;

  return (
    <>
      <Helmet>
        <title>{blog.title} | Gideon Yegon's Blog</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://yegon.datany.online/blogs/${blog.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://yegon.datany.online/default-blog-image.jpg" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-[#182B5C] to-[#46567C] py-8 px-4 sm:px-6 lg:px-12">
        {/* Removed max-w-3xl to allow full-width content */}
        <div className="w-full max-w-[90ch] mx-auto">
          <BlogCard blog={blog} isFullWidth={true} />
        </div>
      </div>
    </>
  );
}

export default BlogDetails;