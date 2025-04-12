// src/contexts/BlogContext.js
import React, { createContext, useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../firebase';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const blogRef = collection(db, 'blogs');

  // Fetch blogs from Firebase
  const getBlogs = async () => {
    try {
      const data = await getDocs(query(blogRef, orderBy('timestamp', 'desc')));
      setBlogs(
        data.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description || '',
          author: doc.data().author,
          email: doc.data().authorMail,
          timestamp: doc.data().timestamp?.toDate().toLocaleString(),
        }))
      );
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, getBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};
