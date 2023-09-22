import React from 'react'
import { FaCopyright, FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer mt-3' id='contact'>
      <div className="footercont">
        <div className="footer-contact-us ">
          <h3 className='text-center'><b>C O N T A C T - U S</b></h3>
          <div className="contact-us-cont">
            <div className="email ">
              <p><b>Email:</b> 123456@gmail.com</p>
              <p><b>Phone:</b> +2345678901</p>
            </div>
            <div className="socialmedia">
              <h3 className='text-center'><b>Our Social Handles</b></h3>
              <div className="social-cont">
                <div className="social facebook">
                  <FaFacebook style={{color:'blue'}}/>
                  <a href="https://www.facebook.com/lightcarriersoutreach?mibextid=ZbWKwL">Facebook</a>
                </div>
                <div className="social whatsapp">
                  <FaWhatsapp style={{color:'green'}}/>
                  <a href="https://chat.whatsapp.com/LgkkuWJ6WUYHGx6saCDYSS">Whatsapp</a>
                </div>
                <div className="social telegram">
                  <FaTelegram style={{color:'#0088cc'}} />
                  <a href="https://t.me/farosglobalchurch">Telegram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-reserve">
        <p><FaCopyright/>All Right Reserve @OMD-TECH.ng, 2023. <span>Call: 09014975715</span></p>
        <span>Call: 09014975715</span>
      </div>
    </div>
  )
}

export default Footer