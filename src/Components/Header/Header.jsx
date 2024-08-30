import React from 'react'
import './Header.css'
import logo from '../../assets/DSU logo1.png'
import visit_icon from '../../assets/icon-header-visit.png'
import apply_icon from '../../assets/icon-header-apply.png'
import give_icon from '../../assets/icon-header-give.png'
import search_icon from '../../assets/icon-header-search.png'
import collapse_down from '../../assets/Collapse-down.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='logo'>
        <a target='_self' href=""><img src={logo} alt="" /></a>
        </div>
        <div className="Right-items">
        <div className='header-icons'>
        <ul>
          <li><a href="#"><img src={visit_icon} alt="" /></a></li>
          <li><a href="#"><img src={apply_icon} alt="" /></a></li>
          <li><a href="#"><img src={give_icon} alt="" /></a></li>
          <li><a href="#"><img src={search_icon}alt="" /></a></li>
        </ul>
      </div>
      <div className='dropdown-menu'>
        <button className='dropbtn'>Quick Links  <span><img className='arrow-down' src={collapse_down}alt="" /></span></button>
        <div className='dropdown-content'>
          <ul>
            <li><a href="">MyDSU</a></li>
            <li><a href="">Maps</a></li>
            <li><a href="">People Directory</a></li>
            <li><a href="">Email</a></li>
            <li><a href="">Careers</a></li>
          </ul>
        </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Header
