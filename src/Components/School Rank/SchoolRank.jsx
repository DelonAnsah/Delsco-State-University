import React from 'react'
import './SchoolRank.css'
import next_icon from '../../assets/Forward-Icon.png'
import prev_icon from '../../assets/Prev-icon.png'
import university_icon from '../../assets/university.png'

const SchoolRank = () => {

   
  return (
    <div className='schoolRank-panel'>
      <div className='container'>
         <div className="textComponent">
          <h2 style={{textAlign:'center'}}>DSU AMONG BEST IN THE NATION</h2>
          <h4 className='rank'>Delsco State University continues to rise in national prominence, with its undergraduate, graduate , and online programs receiving increasing recognition for excellence, as reflected in the lastest rankings. </h4>
         </div>
         <div className='slideshow-container'>
          <button className='prev' type='button'><img src={prev_icon} alt="" /></button>
          <button className='next' type='button'><img src={next_icon} alt="" /></button>
          <div className='slider'>
            <div className='mySlides one'>
                <div className="title">
                  <p style={{textAlign:'center'}}>#1</p>
                </div>
                <div className='content'>
                  <p style={{textAlign:'center'}}>Undergraduate Computer Science Program</p>
                </div>
            </div>
            <div className='mySlides two'>
                <div className="title">
                  <p style={{textAlign:'center'}}>#5</p>
                </div>
                <div className='content'>
                  <p>Undergraduate Business Program </p>
                </div>
            </div>
            <div className='mySlides three'>
                <div className="title">
                  <p style={{textAlign:'center'}}>#15</p>
                </div>
                <div className='content'>
                  <p>Undergraduate Mechanical Engineering Program</p>
                </div>
            </div>
            <div className='mySlides four'>
                <div className="title">
                  <p style={{textAlign:'center'}}>#8</p>
                </div>
                <div className='content'>
                  <p>Best Graduate School for Business Program </p>
                </div>
            </div>
            <div className='mySlides five'>
                <div className="title">
                  <p style={{textAlign:'center'}}>#22</p>
                </div>
                <div className='content'>
                  <p>Best Graduate School for Education</p>
                </div>
              </div>
              <div className='mySlides six'>
                <div className="title">
                  <p style={{textAlign:'center'}}>#40</p>
                </div>
                <div className='content'>
                  <p>Best Graduate School for Engineering</p>
                </div>
              </div>
              <div className='mySlides seven'>
                <div className="title">
                  <p>#20</p>
                </div>
                <div className='content'>
                  <p>Online MBA program</p>
                </div>
              </div>
              <div className='mySlides eight'>
                <div className="title">
                  <p>#50</p>
                </div>
                <div className='content'>
                  <p>Online Master's in Computer Science</p>
                </div>
              </div>
              <div className='mySlides nine'>
                <div className="title">
                  <p>#70</p>
                </div>
                <div className='content'>
                  <p>Online Masters in Education Program</p>
                </div>
            </div>
          </div>
          <div className="dot-container">
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
         </div>
         </div>
        <div className='announcement'>
          <h3 className='announcement-head'>
            <a href=""><img className='uni-icon' src={university_icon} alt="" /> READ THE LATEST RANKINGS ANNOUNCEMENT &gt;</a>
          </h3>
        </div>
      </div>
      
    </div>
  )
}

export default SchoolRank
