import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-left'>
        <img  className="logo" src="https://cdn1.vectorstock.com/i/1000x1000/28/35/home-buy-sell-or-rent-logo-icon-vector-21512835.jpg" alt="" />
        <h1>RANTY</h1>
      </div>
      <div className='nav-medal'>
        <ul>
          <li><Link to="/Service">Service</Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About_us">About Us</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Project">Project</Link></li>
        </ul>
      </div>
      <div className='nav-right'>
        <ul>
          <li><Link to="/English">Eng</Link></li> /
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
