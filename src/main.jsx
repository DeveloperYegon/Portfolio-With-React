import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "./contexts/AuthContext.jsx";
import AppProviders from './contexts/AppProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
<AppProviders>
      <App />
 </AppProviders>
);