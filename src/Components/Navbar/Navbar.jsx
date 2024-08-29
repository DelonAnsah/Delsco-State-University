import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/LOGO 2.png'


const Navbar = () => {
  const [showDropdowns, setShowDropdowns] = useState(false);

  const handleMouseEnter = ()=>{
    setShowDropdowns(true);
  }

  const handleMouseLeave = () => {
    setShowDropdowns(false);
  }

  const navButtons = [
    {label: "ABOUT DSU", dropdown: ["Leadership", "Mission", "Experience DSU", "History"]},
    {label: "PROSPECTIVE STUDENTS", dropdown: ["Undergraduate Admissions", "Success After DSU", "Graduate Admissions", "Professional & Continuing Students"]},
    {label: "CURRENT STUDENTS", dropdown: ["Academic Calender", "Housing", "Finances & Aid", "Advising"]},
    {label: "FACULTY & STAFF ", dropdown: ["Human Resources", "Experts", "Employee Resources", "Faculty Affairs"]},
    {label: "ALUMNI & FRIENDS ", dropdown: ["Connect", "Give", "Resources", "About"]},
    {label: "ACADEMICS", dropdown: ["Colleges", "Library", "Programs", "Registrar"]},
    {label: "RESEARCH & INNOVATION", dropdown: ["Research At DSU", "Horn Entrepreneurship", "STAR Campus", "Innovation Getaway"]},
    {label: "ATHLETICS", dropdown: ["BlueHens.com"]}
  ];

  return (
    <>
      <div className='navigation'>
        <img src={logo} alt="logo" className='logo' />
        <div>
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us </li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contact us</button></li>
        </ul>
        </div>
      </div>
      <nav className='navbar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {navButtons.map((button, index) => (
          <div key={index} className='nav-item' >
            <button className='nav-button'><b>{button.label}</b></button>
            {showDropdowns && (
              <div className='dropdown'>
               {button.dropdown.map((link, idx) => (
                <a key={idx} href={`#${link.toLowerCase().replace("", "-")}`} className='dropdown-link'>
                  {link}
                </a>
               ))} 
              </div>
            )}
          </div>
        ))}
      </nav>
    </>

  )
}

export default Navbar
