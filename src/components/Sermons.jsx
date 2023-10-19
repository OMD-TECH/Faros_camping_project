import React from 'react'
import { FaBible, FaMountain, FaMusic,FaSpeakap,FaYoutube } from "react-icons/fa";
import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css"
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});

export default function Sermons() {
  return (
    <div>
        <div className="sermon-sec1 container-md">
          <div className="sec1cont">
            <div className="carousel">
              <div className="left">
                <h2 ><span className="h2" style={{fontWeight:"300"}}>Awesome Experience,</span> <span className="h2" style={{fontWeight:"700"}}>Great Service</span></h2>
                <p>We commit disciples firmly rooted in God's teachings, driven by an active faith yielding outsanding outcomes. These disciples engage in prayers, fasting, exhibit spiritual gifts and fruits, embrace a transformed mindset, and wield the power of God consistently.</p>
              </div>
              <div className="right">
              <div class="swiffy-slider slider-item-show2 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-first-visible rightcont">
                <ul className="slider-container">
                  <li className="slide-visible">
                    <a href="/sermons">
                      <div className="card shadow ">
                        <div className="card-body p-2 p-xl-3">
                          <div className="icon" >
                            <FaBible className="i"/>
                          </div>
                          <div className="content">
                            <h3 className="card-title h5"><b>SERMONS</b></h3>
                            <p className="card-text" style={{fontWeight:"lighter"}}>spiritual Insights</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="slide-visible">
                    <a href="/musics">
                      <div className="card shadow ">
                        <div className="card-body p-2 p-xl-3">
                          <div className="icon">
                            <FaMusic className="i"/>
                          </div>
                          <div className="content">
                            <h3 className="card-title h5"><b>MUSIC</b></h3>
                            <p className="card-text" style={{fontWeight:"lighter"}}>Heavenly Harmony</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="slide-visible">
                    <a href="/instrumentals">
                      <div className="card shadow ">
                        <div className="card-body p-2 p-xl-3">
                          <div className="icon">
                            <FaSpeakap className="i"/>
                          </div>
                          <div className="content">
                            <h3 className="card-title h5"><b>INSTRUMENTALS</b></h3>
                            <p className="card-text" style={{fontWeight:"lighter"}}>PRAYER/MEDITATION</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="slide-visible">
                    <a href="/videos">
                      <div className="card shadow ">
                          <div className="card-body p-2 p-xl-3">
                            <div className="icon">
                              <FaYoutube className="i"/>
                            </div>
                            <div className="content">
                              <h3 className="card-title h5"><b>VIDEOS</b></h3>
                              <p className="card-text" style={{fontWeight:"lighter"}}>MINISTRATIONS</p>
                            </div>
                          </div>
                      </div>
                    </a>
                  </li>
                  <li className="slide-visible">
                    <a href="/testimonies">
                      <div className="card shadow ">
                        <div className="card-body p-2 p-xl-3">
                          <div className="icon">
                            <FaMountain className="i"/>
                          </div>
                          <div className="content">
                            <h3 className="card-title h5"><b>TESTIMONIES</b></h3>
                            <p className="card-text" style={{fontWeight:"lighter"}}>OVERCOMER'S TIME</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
