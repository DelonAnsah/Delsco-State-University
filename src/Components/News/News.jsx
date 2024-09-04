import React from 'react'
import './News.css'
import newslogo from '../../assets/News Logo.jpg'
import basketball from '../../assets/Gallery_4.jpg'

const News = () => {
  return (
    <div className='news-panel'>
      <div className="news-container">
        <div className="parent-component">
          <img src={newslogo} alt="DSU Daily" />
          <h2>The lastest news from Delsco State University</h2>
          <div className="news-row">
            <div className="news-column">
              <a href=""><img src={basketball} alt="" width='100%'  /></a>
              <div className="footer">
                <div className="title">
                  <p>DSU Men Basketball Team </p>
                </div>
                <div className="content">
                  <p>DSU makes historical run in the 2024 NCAA Men's Basketball Championship.</p>
                </div>
                <div className="calloutLink">
                  <a href="">Read More About DSU Basketball Team</a>
                </div>
              </div>
            </div>
            <div className="news-column">
              <div>
                <h2>Today's Stories</h2>
              </div>
              <div className='dsudailynews'>
                <ul>
                  <li><a href="">DSU Celebrates Record-Breaking Year of Research Funding and Innovation</a></li>
                  <li><a href="">DSU Launches New State-of-the-Art Science and Technology Center</a></li>
                  <li><a href="">Students Excel in International Competitions, Bringing Home Top Honors</a></li>
                  <li><a href="">DSU Expands Global Outreach with New Study Abroad Partnerships</a></li>
                  <li><a href="">University Hosts Annual Career Fair, Connecting Students with Leading Employers</a></li>
                  <li><a href="">Campus Sustainability Initiatives Lead to National Recognition for Green Practices</a></li>
                  <li><a href="">DSU Welcomes Largest and Most Diverse Incoming Class in School History</a></li>
                  <li><a href="">Award-Winning Faculty Member Receives Prestigious National Teaching Award</a></li>
                </ul>
              </div>
              <div>
                <p><b><a href="">More DSU News</a></b></p>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default News
