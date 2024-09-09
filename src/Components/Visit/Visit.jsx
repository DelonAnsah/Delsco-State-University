import React from 'react'
import './Visit.css'
import visit1 from '../../assets/visit2.jpg'
import visit2 from '../../assets/Gallery_5.jpg'

const Visit = () => {
  return (
    <div className='visit-panel'>
      <div className="visit-container">
        <div className='visit-component'>
        <h2 className='visit-firstheading'>Visit Delsco State University</h2>
        <h4 className='visit-secondheading'>
          <br />
          Delsco State University is nationally recognized for its excellence, with distinguished faculty, a dynamic and picturesque campus, and countless opportunities to make global impact. Whether in our state-of-the-art labs and classrooms, through immersive internships, or by participating in study abroad programs, DSU empowers studens to shape the future.
        </h4>
        <h4 className='visit-thirdheading'>
          <br />
          Experience DSU for yourself.
        </h4>
        </div>
        <div className='visit-row'>
          <div className="visit-column">
            <a href="#">
              <img src={visit1} alt="statue park" />
              <button className='visit-button ' type='button'>&gt;</button>
            </a>
            <div className="visit-imageText">
            <p>Reserve Your Place</p>
            <h4>SCHEDULE A TOUR</h4>
            </div>
          </div>
          <div className="visit-column">
          <a href="#">
            <img src={visit2} alt="Canteen" />
            <button className='visit-button ' type='button'>&gt;</button>
          </a>
          <div className="visit-imageText">
          <p>Explore From Home</p>
          <h4>VIRTUAL TOUR</h4>
          </div>
          </div>
          <div className="visit-column">
            <div className="vlink">
            <div className="apply">
              <a href="#">APPLY TODAY &gt;</a>
            </div>
            <div className="admission">
              <a href="#">UNDERGRADUATE ADMISSIONS &gt;</a>
            </div>
            <div className="major">
             <a href="#">MAJOR FINDER &gt;</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visit
