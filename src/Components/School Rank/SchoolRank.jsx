import React, { useEffect, useState } from 'react'
import './SchoolRank.css'
import next_icon from '../../assets/Forward-Icon.png'
import prev_icon from '../../assets/Prev-icon.png'

const SchoolRank = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, title: '#1', content: 'undergraduate Computer Science Program', style: 'one' },
    { id: 2, title: '#5', content: 'undergraduate Business Program', style: 'two' },
    { id: 3, title: '#15', content: 'undergraduate Mechanical Engineering Program', style: 'three' },
    { id: 4, title: '#8', content: 'Best Graduate School for Business Program', style: 'four' },
    { id: 5, title: '#22', content: 'Best Graduate School for Education', style: 'five' },
    { id: 6, title: '#40', content: 'Best Graduate School for Engineering', style: 'six' },
    { id: 7, title: '#20', content: 'Online MBA Program', style: 'seven' },
    { id: 8, title: '#50', content: 'Online Masters in Computer Science Program', style: 'eight' },
    { id: 9, title: '#20', content: 'Online Masters in Education Program', style: 'nine' },
  ];

  const totalSlides = slides.length;
  const maxSlidesToShow = 3;
  const maxSlideIndex = Math.ceil(totalSlides / maxSlidesToShow) - 1;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === maxSlideIndex ? 0 : prevSlide + 1));
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? maxSlideIndex : prevSlide - 1));
  }
   
  const getDisplayedSlides = () => {
    const start = currentSlide * maxSlidesToShow;
    return slides.slice(start, start + maxSlidesToShow);
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  },[currentSlide]);


  return (
    <div className='schoolRank-panel'>
      <div className='container'>
         <div className="textComponent">
          <h2 style={{textAlign:'center'}}>DSU Among Best In The Nation</h2>
          <h4>&nbsp;</h4>
          <h4 className='rank'>Delsco State University continues to rise in national prominence, with its undergraduate, graduate , and online programs receiving increasing recognition for excellence, as reflected in the lastest rankings. </h4>
         </div>
         <div className='slideshow-container'>
          <div>
          <button className='prev' type='button' onClick={prevSlide}>
            <img src={prev_icon} alt="" />
          </button>
          </div>
          <div className='slider'>
            {getDisplayedSlides().map((slide, index) => (
              <div key={index} className={`mySlides ${slide.style}`} >
                <div className='title'>
                  <p>{slide.title}</p>
                </div>
                  <div className='content'>
                    <p>{slide.content}</p>
                  </div>
              </div>
            ))}
           </div>
           <div>
           <button className='next' type='button' onClick={nextSlide}>
            <img src={next_icon} alt="next" />
           </button>
           </div>
          </div>
          <div className="dot-container">
          {Array.from({length: maxSlideIndex + 1 }).map((_, index) => (
            <span  
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
         </div>
         <div className='announcement'>
          <h3 className='announcement-head'>
            <a href=""><i class="fa-solid fa-building-columns"></i> Read The Latest Rankings Announcement &gt;</a>
          </h3>
        </div>
         </div>
      </div>
  )
}

export default SchoolRank
