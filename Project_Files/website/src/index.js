// App.js (main entry point)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Ensure this path is correct

// Assuming styles.css is imported within App.js or in a component it uses

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
