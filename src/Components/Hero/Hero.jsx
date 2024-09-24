import React, { useRef, useState } from 'react'
import './Hero.css'
import Hero_video from '../../assets/Hero-v.mp4'
import hero_play from '../../assets/hero-play.png'
import hero_pulse from '../../assets/hero-pause.png'
import hero_image from '../../assets/mobileHero 2.jpg'

const Hero = () => {
  const [isplaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if(videoRef.current.paused){
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className='video-container'>
      <video ref={videoRef} className='hero-video' src={Hero_video}   loop autoPlay muted></video>
      {
        !isplaying && (
        <img className={`hero-play ${isplaying? '' : 'pulse'}`} src={hero_play}alt="play" onClick={handlePlayPause} />
        )}
        {isplaying && (
          <img className='hero-play' src={hero_pulse} alt='pause' onClick={handlePlayPause}
          />
        )}
    
      <img src={hero_image} className='hero-image' alt="sky lantern"  loading='lazy' title='welcome to DSU'/>
      
      <div className='hero-text'>
        <h1>YOUR FUTURE STARTS NOW. </h1>
        <h1>BECOME A GREEN LANTEN.</h1>
      </div>
    </div>
  )
}

export default Hero
