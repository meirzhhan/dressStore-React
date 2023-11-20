import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';


import App from './App';
import Contact from './components/Contact';
import Men from './components/Men';
import Women from  './components/Women'
import Profile from './profile-page/Profile';
import Price from './components/Price';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/men' element={<Men />}/>
        <Route path='/women' element={<Women />}/>
        <Route path='/profile/auth' element={<Profile />}/>
        <Route path='/price' element={<Price />}/>
      
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
       
);

