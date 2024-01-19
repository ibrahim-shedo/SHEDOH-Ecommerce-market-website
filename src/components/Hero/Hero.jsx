import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Assets/hand_icon.png'
import arrow_icon from '../Assets/Assets/arrow.png'
import hero_image from '../Assets/Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>latest collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
       <div className="hero-right">
        <img src={hero_image} alt="" />
        </div>  

    </div>
  )
}
