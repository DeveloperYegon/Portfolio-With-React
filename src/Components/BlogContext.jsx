import React from 'react'
import blogs from '../assets/blogs.js'
import { createContext } from 'react'

export const BlogContext = createContext(null);

const BlogContextProvider =(props)=>{

    const contextValue = { blogs};
    //console.log(contextValue);

  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider;