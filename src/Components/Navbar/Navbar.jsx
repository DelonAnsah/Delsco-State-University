import React, { useState } from 'react';
import './Navbar.css';
import visit_icon from '../../assets/icon-header-visit.png'
import apply_icon from '../../assets/icon-header-apply.png'
import give_icon from '../../assets/icon-header-give.png'
import search_icon from '../../assets/icon-header-search.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
  };

  return (
    <nav className='navbar'> 
      <div className="navbar-container">
      <div id='sidebar'>
          <div id='header-icons'>
            <ul id='icon-list'>
              <li id='header-icon'>
                  <a target='self' href="#" title='visit'>
                    <img title='visit' src={visit_icon} alt="visit" />
                  </a>
              </li>
              <li id='header-icon'>
                  <a target='self' href="#" title='Apply'>
                    <img title='apply' src={apply_icon} alt="apply" />
                  </a>
              </li>
              <li id='header-icon' title='Give'>
                  <a target='self' href="#">
                    <img title='give' src={give_icon} alt="give" />
                  </a>
              </li>
              <li id='header-icon' title='search'>
                  <a target='self' href="#">
                   <img title='search' src={search_icon} alt="search" />
                  </a>
              </li>
            </ul>
          </div>
          <button onClick={toggleQuickLinks}>
            Quick Links
            <span><FontAwesomeIcon icon={isQuickLinksOpen ? faChevronUp : faChevronDown} /></span>
          </button>
          <div id='quicklink-mobile' className={`collapse ${isQuickLinksOpen ? 'show' : ''}`}>
          <ul id='dropdown-menu'>
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
          <ul id="navbar-list">
          <li>
            <a href="#">About DSU</a>
          <span className='plus' ><FontAwesomeIcon icon={faPlus} size='lg' /></span>
            <ul id='nav-dropdown'>
              <li><a target='_self' href="#">Leadership</a></li>
              <li><a target='_self' href="#">Mission</a></li>
              <li><a target='_self' href="#">Experience DSU</a></li>
              <li><a target='_self' href="#">DSU and the State of Delsco</a></li>
              <li><a target='_self' href="#">History</a></li>
              <li><a target='_self' href="#">Facts & Figures</a></li>
              <li><a target='_self' href="#">DSU Community</a></li>
              <li><a target='_self' href="#">Values</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Prospective Students</a>
            <span><FontAwesomeIcon icon={faPlus} size='lg'/></span>
            <ul id='nav-dropdown'>
              <li><a target='_self' href="#">Undergraduate Admissions</a></li>
              <li><a target='_self' href="#">Success After DSU</a></li>
              <li><a target='_self' href="#">Graduate Admissions</a></li>
              <li><a target='_self' href="#">Professional & Continuing Studies</a></li>
              <li><a target='_self' href="#">Online Programs</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Current Students</a>
            <span><FontAwesomeIcon icon={faPlus} size='lg' /></span>
            <ul id='nav-dropdown'>
              <li><a target='_self' href="#">Academic Calendar</a></li>
              <li><a target='_self' href="#">Housing</a></li>
              <li><a target='_self' href="#">Finances & Aid</a></li>
              <li><a target='_self' href="#">Advising</a></li>
              <li><a target='_self' href="#">Safety</a></li>
              <li><a target='_self' href="#">Student Diversity & Inclusion</a></li>
              <li><a target='_self' href="#">Student Wellbeing</a></li>
              <li><a target='_self' href="#">Student Support</a></li>
              <li><a target='_self' href="#">Green Lantern Traditions</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Faculty & Staff</a>
            <span><FontAwesomeIcon icon={faPlus} size='lg' /></span>
            <ul id='nav-dropdown'>
              <li><a target='_self' href="#">Human Resources</a></li>
              <li><a target='_self' href="#">Experts</a></li>
              <li><a target='_self' href="#">Employee Resources</a></li>
              <li><a target='_self' href="#">Faculty Affairs</a></li>
              <li><a target='_self' href="#">Media Experts</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Alumni & Friends</a>
            <span><FontAwesomeIcon icon={faPlus} size='lg'/></span>
            <ul id='nav-dropdown'>
              <li><a target='_self' href="#">Connect</a></li>
              <li><a target='_self' href="#">Give</a></li>
              <li><a target='_self' href="#">Resources</a></li>
              <li><a target='_self' href="#">About</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Academics</a>
            <span><FontAwesomeIcon icon={faPlus} size='lg' /></span>
            <ul id='nav-dropdown'>
              <li><a target='_self' href="#">Colleges</a></li>
              <li><a target='_self' href="#">Library</a></li>
              <li><a target='_self' href="#">Programs</a></li>
              <li><a target='_self' href="#">DSU Global</a></li>
              <li><a target='_self' href="#">Registrar</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Research & Innovation</a>
            <span><FontAwesomeIcon icon={faPlus} size='lg' /></span>
            <ul id='nav-dropdown'>
              <li><a target='_self' href="#">Research At DSU</a></li>
              <li><a target='_self' href="#">Horn Entrepreneurship</a></li>
              <li><a target='_self' href="#">STAR Campus</a></li>
              <li><a target='_self' href="#">Innovation Gateway</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Athletics</a>
            <span><FontAwesomeIcon icon={faPlus} size='lg'/></span>
            <ul id='nav-dropdown'>
              <li><a target='_self' href="">GreenLanten.com</a></li>
            </ul>
          </li>
        </ul>
        </div>
        <ul className="navbar-list">
          <li>
            <a href="#">About DSU</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Leadership</a></li>
              <li><a target='_self' href="#">Mission</a></li>
              <li><a target='_self' href="#">Experience DSU</a></li>
              <li><a target='_self' href="#">DSU and the State of Delsco</a></li>
              <li><a target='_self' href="#">History</a></li>
              <li><a target='_self' href="#">Facts & Figures</a></li>
              <li><a target='_self' href="#">DSU Community</a></li>
              <li><a target='_self' href="#">Values</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Prospective Students</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Undergraduate Admissions</a></li>
              <li><a target='_self' href="#">Success After DSU</a></li>
              <li><a target='_self' href="#">Graduate Admissions</a></li>
              <li><a target='_self' href="#">Professional & Continuing Studies</a></li>
              <li><a target='_self' href="#">Online Programs</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Current Students</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Academic Calendar</a></li>
              <li><a target='_self' href="#">Housing</a></li>
              <li><a target='_self' href="#">Finances & Aid</a></li>
              <li><a target='_self' href="#">Advising</a></li>
              <li><a target='_self' href="#">Safety</a></li>
              <li><a target='_self' href="#">Student Diversity & Inclusion</a></li>
              <li><a target='_self' href="#">Student Wellbeing</a></li>
              <li><a target='_self' href="#">Student Support</a></li>
              <li><a target='_self' href="#">Green Lantern Traditions</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Faculty & Staff</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Human Resources</a></li>
              <li><a target='_self' href="#">Experts</a></li>
              <li><a target='_self' href="#">Employee Resources</a></li>
              <li><a target='_self' href="#">Faculty Affairs</a></li>
              <li><a target='_self' href="#">Media Experts</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Alumni & Friends</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Connect</a></li>
              <li><a target='_self' href="#">Give</a></li>
              <li><a target='_self' href="#">Resources</a></li>
              <li><a target='_self' href="#">About</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Academics</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Colleges</a></li>
              <li><a target='_self' href="#">Library</a></li>
              <li><a target='_self' href="#">Programs</a></li>
              <li><a target='_self' href="#">DSU Global</a></li>
              <li><a target='_self' href="#">Registrar</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Research & Innovation</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Research At DSU</a></li>
              <li><a target='_self' href="#">Horn Entrepreneurship</a></li>
              <li><a target='_self' href="#">STAR Campus</a></li>
              <li><a target='_self' href="#">Innovation Gateway</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Athletics</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="">GreenLanten.com</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
