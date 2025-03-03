import React from 'react';
import blogs from '../assets/blogs';
import Item from '../Components/Item';

function BlogsPage() {
  return (
    <main className='text-[#fff] h-full rounded-xl shadow-lg shadow-[#7a5d4c] p-10  bg-[#46567C]  py-3 md:mx-20 my-10'>
      <h1 className=' py-4 text-4xl text-center '>Blogs</h1>
      <hr className='m-auto w-[50%] bg-[#ED7D3B] h-1' />
      <div className='h-full py-4 text-white'>
        {blogs.map((blog) => {
          return (
            <Item 
              key={blog.id} 
              id={blog.id}  // Pass the id prop here
              image={blog.image} 
              name={blog.name} 
              description={blog.description} 
              type="blog"  // Pass the type prop here
            />
          );
        })}
      </div>
    </main>
  );
}

export default BlogsPage;
