import React from 'react'
import './Hero.css'
import wave from '../Assets/wave.png'
import arrow from '../Assets/arrow.png'
import Hero1 from '../Assets/Hero1.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={wave} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collections</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={Hero1} alt="" />
      </div>
    </div>
  )
}

export default Hero