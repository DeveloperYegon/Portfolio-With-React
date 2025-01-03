import React from 'react';

function BlogDisplay(props) {
  const { blog } = props;

  // Ensure blog exists before rendering
  if (!blog || !blog.image) {
    return <div>Blog data not available.</div>;
  }

  return (
    <div className='items-center flex flex-col p-5 border border-slate-950 m-5 h-full text-center'>
      <div className=''>
        <img 
          className="border border-slate-950 h-[300px]" 
          src={blog.image} 
          alt={blog.title || 'Blog Image'} 
        />
      </div>
      
      <div>
        <h2 className='p-5 text-xl'>Blog title: {blog.title}</h2>
        <p className='text-left'>{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogDisplay;
