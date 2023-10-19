import {React, useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function Join() {
    useEffect(()=>{
        AOS.init({duration:1500, delay:0})
      },[])

  return (
    <div className='container-fluid'>
        <div className="sec6 container-md" data-aos="flip-right">
            <div className="img">
                <img src="/images/image1 (2).jpg" alt="" />
            </div>
            <div className="sec6cont">
                <div className="textbody">
                    <div className="txtcont">
                        <p className="leftloader"><b className="join-us">JOIN US TODAY</b></p>
                        <h3 className="rightloader"><b className="sub-heading">Join Us And Make A Difference</b></h3>
                        <p className="text rightloader">Be a part of a trusted and dedicated community driven by strong desire, conviction, accountability, ethical practices, and soul winning. Together, we can make a difference.</p>
                        <a href="https://chat.whatsapp.com/LgkkuWJ6WUYHGx6saCDYSS">
                            <button className="joinusbtn leftloader">
                                <b>Join Us Now </b>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
