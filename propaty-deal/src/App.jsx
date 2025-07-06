import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './assets/page/Home';
import About_us from './assets/page/About_us';
import Navbar from './assets/page/Navbar';
import Service from './assets/page/Service';
import Contact from './assets/page/Contact';
import './App.css';
import Project from './assets/page/Project';
import English from './assets/page/English';
import More from './assets/page/More';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<About_us/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Project' element={<Project/>} />
        <Route path='/English' element={<English/>} />
        <Route path='/more' element={<More/>} />

    </Routes>
  )
}

export default App