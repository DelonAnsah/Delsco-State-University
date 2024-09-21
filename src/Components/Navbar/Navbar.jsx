import React, { useState } from 'react';
import './Navbar.css';
import visit_icon from '../../assets/icon-header-visit.png'
import apply_icon from '../../assets/icon-header-apply.png'
import give_icon from '../../assets/icon-header-give.png'
import search_icon from '../../assets/icon-header-search.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
  };
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  };

  const closeSidebar =(e) => {
    if (e.target.classList.contains("sidebar-overlay")) {
      setIsSidebarOpen(false);
    }
  };

 
  return (
    <nav className={`navbar ${isQuickLinksOpen ? 'open' : ''}`}> 
      <button className='nav-toggle' onClick={toggleSidebar}>
        <FontAwesomeIcon className='faBars' icon={faBars} />
       </button>
      <div className= "navbar-container">
        <div className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`} onClick={closeSidebar}      >
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <div id='header-icons'>
              <ul id='icon-list'>
                <li id='header-icon'><a href="#"><img src={visit_icon} alt="visit"/></a></li>
                <li id='header-icon'><a href="#"><img src={apply_icon} alt="apply"/></a></li>
                <li id='header-icon'><a href="#"><img src={give_icon} alt="give"/></a></li>
                <li id='header-icon'><a href="#"><img src={search_icon} alt="search"/></a></li>
              </ul>
            </div>
            <button id='QuickLink-button' onClick={toggleQuickLinks}>
              Quick Links
              <span><FontAwesomeIcon icon={isQuickLinksOpen ? faChevronUp : faChevronDown} /></span>
            </button>
            <div className={`quicklink-mobile collapse ${isQuickLinksOpen ? 'show' : ''}`}>
              <ul id='dropdown-menu'>
                <li><a href="#" >MyDSU</a></li>
                <li><a href="#" >Maps</a></li>
                <li><a href="#" >People Directory</a></li>
                <li><a href="#" >Email</a></li>
                <li><a href="#" >Careers</a></li>
                <li><a href="#" >Library</a></li>
                <li><a href="#" >A-Z Index</a></li>
                <li><a href="#" >News</a></li>
                <li><a href="#" >Events</a></li>
                <li><a href="#" >Safety at DSU</a></li>
              </ul>
            </div>
            <ul id="navbar-list">
              {[
                { title: "About DSU", items: ["Leadership", "Mission", "Experience DSU", "DSU and the State of Delsco", "History", "Facts & Figures", "DSU Community", "Values"] },
                { title: "Prospective Students", items: ["Undergraduate Admissions", "Success After DSU", "Graduate Admissions", "Professional & Continuing Studies", "Online Programs"] },
                { title: "Current Students", items: ["Academic Calendar", "Housing", "Finances & Aid", "Advising", "Safety", "Student Diversity & Inclusion", "Student Wellbeing", "Student Support", "Green Lantern Traditions"] },
                { title: "Faculty & Staff", items: ["Human Resources", "Experts", "Employee Resources", "Faculty Affairs", "Media Experts"] },
                { title: "Alumni & Friends", items: ["Connect", "Give", "Resources", "About"] },
                { title: "Academics", items: ["Colleges", "Library", "Programs", "DSU Global", "Registrar"] },
                { title: "Research & Innovation", items: ["Research At DSU", "Horn Entrepreneurship", "STAR Campus", "Innovation Gateway"] },
                { title: "Athletics", items: ["GreenLanten.com"] },
               ].map((section, index) => (
                <li key={index} onClick={() => toggleDropdown(index)}tabIndex={0} >
                  <div id='navbaralign'>
                    <a href="#">{section.title} </a>
                    <span><FontAwesomeIcon icon={openDropdown === index ? faMinus : faPlus } size='lg' /></span>
                  </div>
                  
                  <ul id='nav-dropdown' className={openDropdown === index ? 'show' : ''}>
                    {section.items.map((item, i) => (
                      <li key={i}><a href="#">{item}</a></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
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
