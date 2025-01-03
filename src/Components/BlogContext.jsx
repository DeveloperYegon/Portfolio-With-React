import React from 'react'
import blogs from '../assets/blogs.js'
import projects from '../assets/projects.js';
import { createContext } from 'react'

export const BlogContext = createContext(null);

const BlogContextProvider =(props)=>{

    const contextValue = { blogs, projects };
    //console.log(contextValue);

  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider;