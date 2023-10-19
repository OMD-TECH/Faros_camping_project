import {React, useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Join from './Join'


export default function Donate() {

  useEffect(()=>{
    AOS.init({duration:1500, delay:0})
  },[])

  return (
    <div className="donate container-fluid">
      <div className=" sec1 mt-3">
        <div className="sec1cont">
          <div className="imgbanner">
            <img src="/images/image1 (1).jpg" alt=""/>
          </div>
          <div className="overlay d-grid justify-content-center align-items-center" data-aos="fade-left">
            <div className="overlaycont p-2" data-aos="fade-right">
              <h1 className='text-center leftloader'><b>SUPPORT THE VISION</b></h1>
              <p className='rightloader'><b>"Ask for rain from the Lord at the time of the spring rain. It is the Lord who makes the thunder clouds; And He will give them showers of rain, grass in the field to everyone.</b></p>
              <p className='text-center leftloader'>(Zechariah 10:1)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sec2 container-sm" data-aos="fade-left">
        <div className="container-md account" data-aos="fade-right">
          <h2 className='text-center mb-3'>Account Details</h2>
          <div className="accountsec">
            <div className="acc accountname">
              <p><b>Account Name:</b></p>
              <p>farosglobalchurch</p>
            </div>
            <div className="acc accountnumber">
              <p><b>Account Number:</b></p>
              <p>1234567890</p>
            </div>
            <div className="acc bank">
              <p><b>Bank Name:</b></p>
              <p>GTBank PLC</p>
            </div>
          </div>
        </div>
      </div>
      <Join />
    </div>
  )
}
