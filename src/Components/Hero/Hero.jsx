import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile from '../../assets/profile.png'
import './Hero.css'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="no image" />
        <h1><span>I'm Megha Praveen</span></h1>
        <p>I'm a passionate full stack developer with a strong background in HTML, CSS, JavaScript, ReactJs and SQL. <br />I'm now learning web development with ME(A)RN Stack.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero