import React from 'react'
import './Hero.css'
import hero from '../Assets/hero.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>AESTHETIC COLLECTION</h2>
      <div>
        <p>Dive into the verge of new fashion!</p>
      </div>
      <div className="hero-latest-btn">
        <div>latest collection</div>
      </div>
      </div>
      <div className="hero-right">
        <img src={hero} height={670} alt="" />
      </div>
    </div>
  )
}

export default Hero