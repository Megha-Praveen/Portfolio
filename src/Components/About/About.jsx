import React from 'react'
import profile from '../../assets/lady.png'
import theme from '../../assets/theme_pattern.svg'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme} alt="no image" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="no image" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I hold a master's degree in Computer Applications from St. Joseph's College of Engineering and Technology, Palai in Kerala, complemented by a Bachelor of Computer Applications from Mar Augusthinose College, Ramapuram. Additionally, I have earned certifications in Cloud Computing and IoT from IIT Kharagpur.</p>
                    <p>With a robust foundation in web development technologies, I am dedicated to continuously evolving my skill set and adapting to the latest trends in this dynamic field. My ambition is to harness my expertise to craft innovative and impactful web solutions that make a difference.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width: "80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width: "50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width: "60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>SQL</p>
                        <hr style={{width: "70%"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About