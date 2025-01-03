import React from 'react'
import { useContext } from 'react'
import { BlogContext } from '../Components/BlogContext'
import { useParams } from 'react-router-dom'
import ProjectDisplay from '../Components/ProjectDisplay'
// import App from '../App'


function Project() {
    const { projects, blogs } = useContext(BlogContext);
    const {projectId}= useParams();
    // const blogId= params.blogId
    const project = projects.find((item) => item.id === Number((projectId)));

   // console.log('Blog ID:', blogId); //undefined
   // console.log(blog);//single blog
    
    //console.log(blogs);//total blogs
   
    
  return (
    <div>
        <ProjectDisplay project={project} />
    </div>
  )
}

export default Project