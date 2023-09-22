import React from 'react'
import {useEffect} from "react"
import { FaDollarSign, FaHandshake, FaPeopleCarry } from "react-icons/fa"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"


export default function Partner() {

  useEffect(()=>{
    AOS.init({duration:1000, delay:0})
  },[])


  return (
    <div className="sec4 container-md" id="partner">
      <p><b>P A R T I C I P A T E</b></p>
      <h3><b>Let's Make A Difference Today</b></h3>
      <div className="sec4cont row">
        <div className="col subsec leftloader" data-aos="fade-right">
          <div className="subsecont">
            <div className="iconcont">
              <FaDollarSign className="icon"/>
            </div>
            <h3>DONATE TO SUPPORT</h3>
            <p>Join us in making a difference. Support our programs and outreaches financially and help change lives today</p>
            <Link to="/donate">
              <button>Donate Now</button>
            </Link>
          </div>
        </div>
        <div className="col-md subsec rightloader" data-aos="fade-up">
          <div className="subsecont">
            <div className="iconcont">
              <FaPeopleCarry className="icon"/>
            </div>
            <h3>BECOME A VOLUNTEER</h3>
            <p>Be part of the revival movement. Volunteer your time and skills to create positive change together.
            </p>
            <a href="#">
              <button>Join Us Now</button>
            </a>
          </div>
        </div>
        <div className="col subsec leftloader" data-aos="fade-left">
          <div className="subsecont">
            <div className="iconcont">
              <FaHandshake className="icon" />
            </div>
            <h3 onsc>BECOME A PARTNER</h3>
            <p>Let’s join forces and make a greater impact together through a meaningful partnership. Together, we can achieve</p>
            <a href="#">
              <button>Join Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

