import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import SSRProvider from 'react-bootstrap/SSRProvider';

// setting up the total app with the necessary imported dependencies
// used SSRProvider to wrap around the App as development best practices and server-side rendering

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SSRProvider> 
      <App />
    </SSRProvider>
  </React.StrictMode>
);
