import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App.js';
import Contact_ from './Contact.js';
import Men_ from './Men.js';
import Women_ from  './Women.js'
import Profile_ from './profile-page/Profile';
import Price_ from './Price';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<App />}></Route>
      <Route path='/contact' element={<Contact_ />}></Route>
      <Route path='/men' element={<Men_ />}></Route>
      <Route path='/women' element={<Women_ />}></Route>
      <Route path='/profile/auth' element={<Profile_ />}></Route>
      <Route path='/price' element={<Price_ />}></Route>
      
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
       
);

