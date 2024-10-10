import React from 'react'
import logo from '../../assets/logo.png'
import user from '../../assets/user_icon.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>I'm a web developer with a strong background in HTML, CSS, JavaScript, Python, and SQL. <br />I have experience with Django and Flutter, and I'm now learning web development with ME(A)RN.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">&copy; 2024 Megha Praveen. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer