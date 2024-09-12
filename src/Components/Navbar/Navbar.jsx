import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  

  return (
    <nav className='navbar'> 
      <div className="navbar-container">
      <ul className="navbar-list">
      <li><a href="#">About DSU</a>
        <ul className="nav-dropdown">
          <li><a href="#">Leadership</a></li>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Experience DSU</a></li>
          <li><a href="#">DSU and the State of Delsco</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Facts & Figures</a></li>
          <li><a href="#">DSU Community</a></li>
          <li><a href="#">Values</a></li>
        </ul>
      </li>
      <li><a href="#">Prospective Students</a>
        <ul className="nav-dropdown">
          <li><a href="#">Undergraduate Admissions</a></li>
          <li><a href="#">Success After DSU</a></li>
          <li><a href="#">Graduate Admissions</a></li>
          <li><a href="#">Professional & Continuing Studies</a></li>
          <li><a href="#">Online Programs</a></li>
        </ul>
      </li>
      <li><a href="#">Current Students</a>
        <ul className="nav-dropdown">
          <li><a href="#">Academic Calendar</a></li>
          <li><a href="#">Housing</a></li>
          <li><a href="#">Finances & Aid</a></li>
          <li><a href="#">Advising</a></li>
          <li><a href="#">Safety</a></li>
          <li><a href="#">Student Diversity & Inclusion</a></li>
          <li><a href="#">Student Wellbeing</a></li>
          <li><a href="#">Student Support</a></li>
          <li><a href="#">Green Lantern Traditions</a></li>
        </ul>
      </li>
      <li><a href="#">Faculty & Staff</a>
        <ul className="nav-dropdown">
          <li><a href="#">Human Resources</a></li>
          <li><a href="#">Experts</a></li>
          <li><a href="#">Employee Resources</a></li>
          <li><a href="#">Faculty Affairs</a></li>
          <li><a href="#">Media Experts</a></li>
        </ul>
      </li>
      <li><a href="#">Alumni & Friends</a>
        <ul className="nav-dropdown">
          <li><a href="#">Connect</a></li>
          <li><a href="#">Give</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </li>
      <li><a href="#">Academics</a>
        <ul className="nav-dropdown">
          <li><a href="#">Colleges</a></li>
          <li><a href="#">Library</a></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">DSU Global</a></li>
          <li><a href="#">Registrar</a></li>
        </ul>
      </li>
      <li><a href="#">Research & Innovation</a>
        <ul className="nav-dropdown">
          <li><a href="#">Research At DSU</a></li>
          <li><a href="#">Horn Entrepreneurship</a></li>
          <li><a href="#">STAR Campus</a></li>
          <li><a href="#">Innovation Gateway</a></li>
        </ul>
      </li>
      <li><a href="#">Athletics</a>
        <ul className="nav-dropdown">
          <li><a href="">GreenLanten.com</a></li>
        </ul>
      </li>
    </ul>
      </div>
  </nav>
  );
};

export default Navbar;
