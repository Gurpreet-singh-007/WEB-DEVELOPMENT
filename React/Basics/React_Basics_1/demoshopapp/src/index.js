import React from 'react';
import ReactDOM from 'react-dom/client';

// // for basics 1 
// import './index.css';
// import App from './Basics1/App';
// import reportWebVitals from './reportWebVitals';

// for basics 2 
import './index.css';
import App from './Basics2/App';
import reportWebVitals from './reportWebVitals';
// import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
