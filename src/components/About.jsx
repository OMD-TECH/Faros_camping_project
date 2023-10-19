import {React, useEffect} from 'react'
import Partner from './Partner'
import AOS from "aos"
import "aos/dist/aos.css"
import Sermons from './Sermons'

export default function Register() {

  useEffect(()=>{
    AOS.init({duration:1500, delay:0})
  },[])

  return (
   <div className=" about container-fluid">
      <div className="sec5cont">
        <div className="left aboutbanner" data-aos="flip-right">
          <div className="leftcont">
            <div className="about-header row justify-content-center align-items-center">
              <div className="image col">
                <img src="/images/image1 (11).png" alt="" />
              </div>
              <div className="bannerlogo col-md">
                <div className='textcont' >
                  <h2><b className='h2 text-center' style={{fontStyle:"oblique"}}>WELCOME TO FAROS GLOBAL CHURCH</b> <span>(FAROS meaning light house).</span></h2>
                  <p className='leftloader mt-3'>FARO's GLOBAL CHURCH (FARO meaning light house) is a ministry founded by Apst. Micheal Favour for the sole purpose of preaching the gospel and bringing end time revival to every creature.We are situated in Federal University Of Technology Owerri (FUTO), Imo state to be precise but our operations are far beyond states, tribes, denomination etc.</p>
                </div>
                <div className='textbody'>
                  <div className='textcont' >
                    <p><span className=' h2' style={{fontStyle:"oblique"}}>OUR VISION</span> Is to raise men with understanding and mastery of the times into different spheres of influence, by the revelation of the word and the Spirit for Kingdom advancement.</p>
                  </div>
                </div>
                <div className='textcont' >
                <p><span className=' h2' style={{fontStyle:"oblique"}}>OUR MISSION</span></p>
                    <ul>
                      <li>Reviving the hunger for the Holy Spirit in the Church.</li>
                      <li>Teaching the Word by the Revelation of the Spirit in the lives of men.</li>
                      <li>Bringing the presence and manifest powetr of the Spirit in the lives of men.</li>
                      <li>Teaching youths to be generation changers and pillars.</li>
                      <li>Reaching out to the unbeliver and the 'unchurched' in love and power of the Spirit.</li>
                      <li>Mentality and Identity crisis prevention and repair.</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Sermons  />
        <div className="right container-md mt-5">
          <div className="textbody p-2">
            <div className="mission sec sec3 cont" data-aos="fade-up">
              <div className="sec3cont secont">
                <div data-aos="fade-left" className='textbody'>
                  <div className='textcont' >
                    <p className='h2'>OUR WEEKLY ACTIVITIES</p>
                    <div className="activites row">
                      <ul className='col'>
                        <li>Sunday Service: 5pm - 9pm every sunday</li>
                        <li>Midweek Service: 5pm - 9pm every wednesday</li>
                        <li>Weekly Outreach: 5pm every friday</li>
                        <li>Choir Rehearsal: 9pm till dawn every friday</li>
                      </ul>
                      <div className="location col-md">
                        <p className='h5'>LOCATION</p>
                        <p>We are situated at FUTO Foods, close to round-about Old SEET Head inside FUTO Owerri,Imo State.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec department">
              <h2>DEPARTMENTS</h2>
              <div className="department-sect">
                <div className="container-md swiffy-slider slider-item-show3 slider-nav-round slider-nav-page events">
                  <ul className="slider-container">
                      <li>
                          <div className="card border-0">
                              <div className="ratio ratio-1x1">
                                  <img src="/images/image1 (1).jpg" className="card-img-top" loading="lazy" alt="..."/>
                              </div>
                              <div className="card-body p-0 p-2">
                                  <div className="d-flex">
                                      <h3 className="flex-grow-1 h5">MEDIA TEAMS</h3>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div className="card border-0">
                              <div className="ratio ratio-1x1">
                                  <img src="/images/image1 (2).jpg" className="card-img-top" loading="lazy" alt="..."/>
                              </div>
                              <div className="card-body p-0 p-2">
                                  <div className="d-flex">
                                      <h3 className="flex-grow-1 h5">WORSHIP TEAM</h3>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div className="card border-0">
                              <div className="ratio ratio-1x1">
                                  <img src="/images/image1 (3).jpg" className="card-img-top" loading="lazy" alt="..."/>
                              </div>
                              <div className="card-body p-0 p-2">
                                  <div className="d-flex">
                                      <h3 className="flex-grow-1 h5">EVANGELISM TEAM</h3>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div className="card border-0">
                              <div className="ratio ratio-1x1">
                                  <img src="/images/image1 (4).jpg" className="card-img-top" loading="lazy" alt="..."/>
                              </div>
                              <div className="card-body p-0 p-2">
                                  <div class="d-flex">
                                      <h3 className="flex-grow-1 h5">PROTOCOL TEAM</h3>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div className="card border-0">
                              <div className="ratio ratio-1x1">
                                  <img src="/images/image1 (5).jpg" className="card-img-top" loading="lazy" alt="..."/>
                              </div>
                              <div className="card-body p-0 p-2">
                                  <div className="d-flex">
                                      <h3 className="flex-grow-1 h5">DECORATION TEAM</h3>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="card border-0">
                              <div className="ratio ratio-1x1">
                                  <img src="/images/image1 (6).jpg" class="card-img-top" loading="lazy" alt="..."/>
                              </div>
                              <div className="card-body p-0 p-2">
                                  <div className="d-flex">
                                      <h3 className="flex-grow-1 h5">PRAYER TEAM</h3>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="card border-0">
                              <div className="ratio ratio-1x1">
                                  <img src="/images/image1 (7).jpg" class="card-img-top" loading="lazy" alt="..."/>
                              </div>
                              <div className="card-body p-0 p-2">
                                  <div className="d-flex">
                                      <h3 className="flex-grow-1 h5">USHERING TEAM</h3>
                                  </div>
                              </div>
                          </div>
                      </li>
                  </ul>
                  <button type="button" className="slider-nav" aria-labelledby="Go left" ></button>
                  <button type="button" className="slider-nav slider-nav-next" aria-labelledby="Go left" ></button>
                </div>
              </div>
            </div>
          </div>
          <Partner />
        </div>
      </div>
    </div>
  )
}
