import {React, useEffect} from 'react'
import Partner from './Partner'
import AOS from "aos"
import "aos/dist/aos.css"

export default function Register() {

  useEffect(()=>{
    AOS.init({duration:1000, delay:0})
  },[])

  return (
   <div className="sec5 about container-fluid">
      <div className="sec5cont">
        <div className="left aboutbanner" data-aos="flip-right">
          <div className="video">
            <img src="/images/image1 (1).jpg" />
          </div>
          <div className="leftcont">
            <div>
              <div className="bannerlogo">
                <div className="text text-center d-grid align-items-center">
                 <h2><b>WELCOME TO FAROS GLOBAL CHURCH</b> <span>(FAROS meaning light house).</span></h2>
                 <p>We Grow And Glow, Welcome to the house where light dwells.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="textbody p-2">
            <div className="sec sec1 mt-5 cont" data-aos="zoom-out">
              <div className="sec1cont secont col">
                <div data-aos="fade-right">
                  <h3 className="mt-5 text-center"><b>ABOUT US</b></h3>
                  <p className='leftloader'>FARO's GLOBAL CHURCH (FARO meaning light house) is a ministry founded by Apst. Micheal Favour for the sole purpose of preaching the gospel and bringing end time revival to every creature.We are situated in Federal University Of Technology Owerri (FUTO), Imo state to be precise but our operations are far beyond states, tribes, denomination etc.</p>
                </div>
              </div>
              <div className="sec-image col-md" data-aos="fade-up-left">
                <img src="/images/image1 (3).jpg" alt="" />
              </div>
            </div>

            <div className="vision sec sec2 mt-5 cont">
              <div className="sec-image col-md" data-aos="fade-up-left">
                <img src="/images/image1 (2).jpg" alt="" />
              </div>
              <div className="sec1cont secont col">
                <div data-aos="fade-right">
                  <h3 className="text-center"><b>VISION STATEMENT</b></h3>
                  <p>To raise men with understanding and mastery of the times into different spheres of influence, by the revelation of the word and the Spirit for Kingdom advancement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mission sec sec3 mt-5 cont" data-aos="fade-up">
              <div className="sec1cont secont col">
                <div data-aos="fade-left">
                  <h3 className='text-center'><b>OUR MISSION</b></h3>
                  <ol>
                    <li>Reviving the hunger for the Holy Spirit in the Church.</li>
                    <li>Teaching the Word by the Revelation of the Spirit in the lives of men.</li>
                    <li>Bringing the presence and manifest powetr of the Spirit in the lives of men.</li>
                    <li>Teaching youths to be generation changers and pillars.</li>
                    <li>Reaching out to the unbeliver and the 'unchurched' in love and power of the Spirit.</li>
                    <li>Mentality and Identity crisis prevention and repair.</li>
                  </ol>
                </div>
              </div>
              <div className="sec-image col-md" data-aos="fade-up-left">
                <img src="/images/image1 (5).jpg" alt="" />
              </div>
            </div>
           <Partner />
          </div>
        </div>
      </div>
    </div>
  )
}
