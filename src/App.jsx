import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Donate from './Pages/Donate'
import ALogin from './Admin/ALogin'
import ABlog from './Admin/ABlog'
import PrivateRoute from"./Components/PrivateRoute"
import BlogDetails from "./Components/BlogDetails"
import { BlogProvider } from './contexts/BlogContext'

function App( ) {

  return (
    <div className='bg-[#182B5C]'>    
     <BlogProvider>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/notifications' element={<Notifications/>}/> */}
            <Route path='/donate' element={<Donate/>} />
            <Route path="/blogs/:id" element={<BlogDetails />} />

            <Route path='/blogs' element={<Blog/>}/>
            {/* <Route path='/notify' element={<ANotifications/>}/> */}
           <Route path='/add-blog'  element={
          <PrivateRoute>
            <ABlog/>
          </PrivateRoute>
        }/>
           {/* <Route path='/add-admin' element={<ARecruit/>}/> */}
           <Route path='/login' element={<ALogin/>}/>
           
           
           
          </Routes>
          <Footer/>
      </BrowserRouter>
      </BlogProvider> 
    
    </div>
  )
}

export default App