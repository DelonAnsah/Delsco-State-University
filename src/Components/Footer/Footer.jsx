import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/FooterLogo2.png'
import footerimage_2 from '../../assets/footerimage4.jpeg'
import footerimage_3 from '../../assets/footerimage3.jpg'
import footerimage_4 from '../../assets/footerimage6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import  X from '../../assets/X.png'



const Footer = () => {
  return (
    <div className='footer-panel'>
      <div className="footer-container">
        <div className="footer-header">
          <div className='footer-logo'>
          <img src={footerlogo} alt="Logo" />
          </div>
        </div>
          <div className="carousel">
            <div className="carousel-item">
              <a href="#">
              <img src={footerimage_2} alt="Taking Pictures on Campus" width='100%'/>
              <div className='carousel-content'><p>Explore DSU in photos</p></div>
              </a>
            </div>
            <div className="carousel-item">
            <a href="#">
            <img src={footerimage_3} alt="Browsing the internet" width='100%'/>
            <div className='carousel-content'><p>Undergraduate Major Finder</p></div>
            </a>
            </div>
            <div className="carousel-item">
            <a href="#">
            <img src={footerimage_4} alt="test lab" width='100%' />
            <div className='carousel-content'><p>Graduate Program Finder</p></div>
            </a>
            </div>
          </div>
          <div className="dsu-home">
            <a href="#home">
              <FontAwesomeIcon icon={ faHouse }/>
            &nbsp;
            <span>DSU Home</span>
            </a>
          </div>
          <hr />
          <div>
            <div className="footer-rowlinks">
              <div className="footer-columnlinks">
                <div className="linksheader">
                  <h3>Explore</h3>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Athletics</a></li>
                    <li><a href="#">DSU Daily</a></li>
                    <li><a href="#">Virtual Tour</a></li>
                    <li><a href="#">Employment</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-columnlinks">
                <div className="linksheader">
                  <h3>Academics</h3>
                  <ul>
                    <li><a href="#">Undergraduate Admissions</a></li>
                    <li><a href="#">Graduate Admissions</a></li>
                    <li><a href="#">Colleges</a></li>
                    <li><a href="#">Library</a></li>
                    <li><a href="#">Research</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-columnlinks">
                <div className="linksheader">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="#">Accessibility Notice</a></li>
                    <li><a href="#">People Directory</a></li>
                    <li><a href="#">My DSU</a></li>
                    <li><a href="#">Campus Safety</a></li>
                    <li><a href="#">A to Z Index</a></li>
                  </ul>
                </div>
              </div>
              <hr className='connect'/>
              <div className="footer-columnlinks">
                <div className="linksheader">
                  <h3>Connect</h3>
                  <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li id='li'>Delsco State University Spintex,00233 GHA
                    <FontAwesomeIcon icon={  faMapMarkerAlt } className='fontawesome'/>
                    </li>
                    <li id='li' className='li-padding' >P: +233-24967-8172</li>
                    <hr className='connect'/>
                    <li className='social-icons'>
                      <div className="social-icons-desktop">
                        <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
                        <li><a href="#"><img src={facebook} alt="" /></a></li>
                        <li><a href="#" class="fa-brands fa-linkedin"></a></li>
                        <li><a href="#" class="fa-brands fa-youtube"></a></li>
                        <li><a href="#"><img src={X} alt="X" /></a></li>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='footerhr'/>
      </div>
      <div className='footer-fulllinks'>
            <div className="footer-container-fluid">
              <div className="footer-linkItem">&copy;2024 Delsco State University</div>
              <div className="footer-linkItem">
                <a href="#">Comments</a>
              </div>
              <div className="footer-linkItem">
                <a href="#">Legal Notices</a>
              </div>
              <div className="footer-linkItem">
                <a href="#">Accessibility</a>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Footer
