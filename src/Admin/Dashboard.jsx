import React from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
    
    function logout() {
        localStorage.removeItem('token'); // Or use sessionStorage
        window.location.href = '/login';  // Redirect to the login page
      }
  return (
    <main>

        <button onClick={logout}>Logout</button>
        <Link to="/dashboard/add-blog">Add Blog</Link>
        <Link to="/dashboard/add-project">Add Project</Link>
        <Link to="/dashboard/notify">Notification</Link>
        <Link to="/dashboard/add-admin">Register Admin</Link>
    </main>
    
  )
}

export default Dashboard