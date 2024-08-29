import React, { useRef, useState } from 'react'
import './Hero.css'
import Hero_video from '../../assets/Hero-v.mp4'
import hero_play from '../../assets/hero-play.png'

const Hero = () => {
  const [isplaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if(videoRef.current.paused){
      videoRef.current.play();
      setIsPlaying;
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className='video-container'>
      <video ref={videoRef} className='hero-video' src={Hero_video}  controls loop autoPlay muted></video>
      {
        !isplaying && (
        <img className={`hero-play ${isplaying? '' : 'pulse'}`} src={hero_play}alt="play" onClick={handlePlayPause} />
        )}
      
      <div className='hero-text'>
        <h1>YOUR FUTURE STARTS NOW. </h1>
        <h1>BECOME A TIGER.</h1>
      </div>
    </div>
  )
}

export default Hero
