import React, { useState } from 'react'
import './Header.css'
import headerlogo from '../../assets/Headerlogo.png'
import visit_icon from '../../assets/icon-header-visit.png'
import apply_icon from '../../assets/icon-header-apply.png'
import give_icon from '../../assets/icon-header-give.png'
import search_icon from '../../assets/icon-header-search.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  return (
    <div id='home' className='header-panel'>
      <div className="header-container">
        <div className="dsulogo">
          <div className="img-responsive">
            <a target='self' href="#">
              <img className='headerlogo' src={headerlogo} alt="Delsco State University" title='Delsco State University'/>             
            </a>
  
          </div>
        </div>
        <div className="header-icons">
          <ul className='icon-list'>
          <li className='header-icon'>
              <a target='self' href="#" title='visit'>
               <img title='visit' src={visit_icon} alt="visit" />
              </a>
            </li>
            <li className='header-icon'>
              <a target='self' href="#" title='Apply'>
                <img title='apply' src={apply_icon} alt="apply" />
              </a>
            </li>
            <li className='header-icon' title='Give'>
              <a target='self' href="#">
                <img title='give' src={give_icon} alt="give" />
              </a>
            </li>
            <li className='header-icon' title='search'>
              <a target='self' href="#">
               <img title='search' src={search_icon} alt="search" />
              </a>
            </li>
          </ul>
          <div id='quickLinksDropdown' className="dropdown dropdown-menu-right">
            <button className='dropdown-toggle quick-links' type='button'>
              <label> Quick Links </label>
              <span><i class="fa-solid fa-circle-chevron-down fa-bounce"></i></span>
            </button>
            <ul className='dropdown-menu'>
            <li><a href="#" title='myDSU' target='_self' >MyDSU</a></li>
            <li><a href="#" title='Maps' target='_self' >Maps</a></li>
            <li><a href="#" title='people Directory' target='_self' >People Directory</a></li>
            <li><a href="#" title='Email' target='_self' >Email</a></li>
            <li><a href="#" title='Careers' target='_self' >Careers</a></li>
            <li><a href="#" title='Library' target='_self' >Library</a></li>
            <li><a href="#" title='A-Z Index' target='_self' >A-Z Index</a></li>
            <li><a href="#" title='News' target='_self' >News</a></li>
            <li><a href="#" title='Events' target='_self' >Events</a></li>
            <li><a href="#" title='Safety at DSU' target='_self' >Safety at DSU</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
