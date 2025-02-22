import React from 'react'
import { useContext } from 'react'
import { BlogContext } from '../Components/BlogContext'
import BlogDisplay from '../Components/BlogDisplay'
import { useParams } from 'react-router-dom'


function Blog() {
    const { blogs} = useContext(BlogContext);
    const {blogId}= useParams();
    // const blogId= params.blogId
    const blog = blogs.find((item) => item.id === Number((blogId)));

   
    
  return (
    <div>
        <BlogDisplay blog={blog} />
    </div>
  )
}

export default Blog