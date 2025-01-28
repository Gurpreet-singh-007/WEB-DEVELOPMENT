import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './StudyNotion/App';
import { BrowserRouter } from 'react-router';
import {Toaster} from "react-hot-toast" ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <App />
    <Toaster/>
</BrowserRouter>
);


