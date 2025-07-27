// src/contexts/BlogContext.js
import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from '../firebase';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const blogRef = collection(db, 'blogs');
  const blogsPerPage = 6;

  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      let q;
      if (page === 1) {
        q = query(blogRef, orderBy('timestamp', 'desc'), limit(blogsPerPage));
        setBlogs([]);
      } else {
        q = query(
          blogRef,
          orderBy('timestamp', 'desc'),
          startAfter(lastVisible),
          limit(blogsPerPage)
        );
      }

      const data = await getDocs(q);
      const newBlogs = data.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description || '',
        author: doc.data().author,
        email: doc.data().authorMail,
        timestamp: doc.data().timestamp?.toDate().toLocaleString(),
      }));

      if (page === 1) {
        setBlogs(newBlogs);
      } else {
        setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
      }

      setLastVisible(data.docs[data.docs.length - 1]);
      setHasMore(data.docs.length === blogsPerPage);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, fetchBlogs, hasMore, loading }}>
      {children}
    </BlogContext.Provider>
  );
};