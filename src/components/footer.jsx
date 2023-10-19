import {React, useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

import { FaCopyright, FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa'

function Footer() {

  useEffect(()=>{
    AOS.init({duration:1500, delay:0})
  },[])

  return (
    <div className='footer mt-3' id='contact' data-aos="zoom-out">
      <div className="footercont">
        <div className="footer-contact-us ">
          <h3 className='text-center'><b>C O N T A C T - U S</b></h3>
          <div className="contact-us-cont">
            <div className="email ">
              <p><b>Email:</b> farosglobalchurch@gmail.com</p>
              <p><b>Phone:</b> +234 704 705 6510</p>
              <p><b>Ministry Line:</b> +234 704 705 6510</p>
            </div>
            <div className="socialmedia">
              <h3 className='text-center'><b>Our Social Handles</b></h3>
              <div className="social-cont" style={{backgroundColor:"whitesmoke",padding:".6rem",borderRadius:"10px"}}>
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
        <div className="footer-services mt-5">
          <h3 className='text-center'><b>SERVICES</b></h3>
          <div>
            <ul className='mt-3'>
              <li>Salvation.</li>
              <li>Deliverance.</li>
              <li>Bible Teachings.</li>
              <li>Mindset transformation through the word of God.</li>
              <li>Counseling.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-reserve p-2">
        <p><FaCopyright/>All Right Reserve @farosglobalchurch, 2023. <span>Call: 09014975715</span></p>
      </div>
    </div>
  )
}

export default Footer