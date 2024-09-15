import React from 'react';
import './Navbar.css';
import visit_icon from '../../assets/icon-header-visit.png'
import apply_icon from '../../assets/icon-header-apply.png'
import give_icon from '../../assets/icon-header-give.png'
import search_icon from '../../assets/icon-header-search.png'

const Navbar = () => {
  

  return (
    <nav className='navbar'> 
      <div className="navbar-container">
      <div id='sidebar' style={{display: 'none'}}>
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
          <button>
            Quick Links
            <span><i class="fa-solid fa-chevron-down"></i></span>
          </button>
        </div>
        <ul className="navbar-list">
          <li><a href="#">About DSU</a>
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
          <li><a href="#">Prospective Students</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Undergraduate Admissions</a></li>
              <li><a target='_self' href="#">Success After DSU</a></li>
              <li><a target='_self' href="#">Graduate Admissions</a></li>
              <li><a target='_self' href="#">Professional & Continuing Studies</a></li>
              <li><a target='_self' href="#">Online Programs</a></li>
            </ul>
          </li>
          <li><a href="#">Current Students</a>
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
          <li><a href="#">Faculty & Staff</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Human Resources</a></li>
              <li><a target='_self' href="#">Experts</a></li>
              <li><a target='_self' href="#">Employee Resources</a></li>
              <li><a target='_self' href="#">Faculty Affairs</a></li>
              <li><a target='_self' href="#">Media Experts</a></li>
            </ul>
          </li>
          <li><a href="#">Alumni & Friends</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Connect</a></li>
              <li><a target='_self' href="#">Give</a></li>
              <li><a target='_self' href="#">Resources</a></li>
              <li><a target='_self' href="#">About</a></li>
            </ul>
          </li>
          <li><a href="#">Academics</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Colleges</a></li>
              <li><a target='_self' href="#">Library</a></li>
              <li><a target='_self' href="#">Programs</a></li>
              <li><a target='_self' href="#">DSU Global</a></li>
              <li><a target='_self' href="#">Registrar</a></li>
            </ul>
          </li>
          <li><a href="#">Research & Innovation</a>
            <ul className="nav-dropdown">
              <li><a target='_self' href="#">Research At DSU</a></li>
              <li><a target='_self' href="#">Horn Entrepreneurship</a></li>
              <li><a target='_self' href="#">STAR Campus</a></li>
              <li><a target='_self' href="#">Innovation Gateway</a></li>
            </ul>
          </li>
          <li><a href="#">Athletics</a>
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
