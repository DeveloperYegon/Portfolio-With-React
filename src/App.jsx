// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Donate from './Pages/Donate';
import ALogin from './Admin/ALogin';
import ABlog from './Admin/ABlog';
import PrivateRoute from './Components/PrivateRoute';
import BlogDetails from './Components/BlogDetails';
import { BlogProvider } from './contexts/BlogContext';

function App() {
  return (
    <main
      className="bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-no-repeat bg-fixed text-white min-h-screen"
    >
      <BlogProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route
              path="/add-blog"
              element={
                <PrivateRoute>
                  <ABlog />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<ALogin />} />
          </Routes>
          <Footer />
        </HashRouter>
      </BlogProvider> 
    </main>
  );
}

export default App;