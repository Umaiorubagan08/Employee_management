import React from 'react';
import ReactDOM from 'react-dom/client';  // Use `react-dom/client` instead of `react-dom`
import './index.css';
import App from './App';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root element
root.render(  // Use the new render method
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

