import React from 'react'
import call from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'
import mail from '../../assets/mail_icon.svg'
import theme from '../../assets/theme_pattern.svg'
import './Contact.css'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "38260acd-5a69-463e-a590-b68575e8ecdf");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="" />
                        <p>meghapraveen03@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" />
                        <p>Kottayam, Kerala, India</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" />
                        <p>+91 8289872926</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name="email"/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact