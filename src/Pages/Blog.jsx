import React from 'react'
import { useContext } from 'react'
import { BlogContext } from '../Components/BlogContext'
import BlogDisplay from '../Components/BlogDisplay'
import { useParams } from 'react-router-dom'
import App from '../App'


function Blog() {
    const { blogs , projects } = useContext(BlogContext);
    const {blogId}= useParams();
    // const blogId= params.blogId
    const blog = blogs.find((item) => item.id === Number((blogId)));

    //console.log('Blog ID:', blogId); //undefined
  //  console.log(blog);//single blog
    
   // console.log(blogs);//total blogs
   
    
  return (
    <div>
        <BlogDisplay blog={blog} />
    </div>
  )
}

export default Blog