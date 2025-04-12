// BlogDetails.js
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from "../contexts/BlogContext"; 
import BlogCard from "./BlogCard"

function BlogDetails() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext); // or however you're passing blog data

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div className="text-center text-red-600 p-10">Blog not found.</div>;
  }

  return (
    <div className="p-4">
      <BlogCard blog={blog} />
    </div>
  );
}

export default BlogDetails;
