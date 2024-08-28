import React from 'react'
import './Navbar.css'
import logo from '../../assets/LOGO 2.png'


const Navbar = () => {
  return (
    <nav >
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us </li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
