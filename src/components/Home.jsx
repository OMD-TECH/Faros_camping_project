import Header from "./header"
import Footer from "./footer"
import { FaDollarSign, FaHandshake, FaPeopleCarry } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"

function Home() {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const startTimer = ()=>{
    const countdownDate = new Date('December 20, 2023 00:00:00').getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now;

      const days = Math.floor(distance/(1000*60*60*24))
      const hours = Math.floor((distance%(1000*60*60*24)/(1000*60*60)))
      const minutes = Math.floor((distance%(1000*60*60))/(1000*60))
      const seconds = Math.floor((distance%(1000*60))/1000)

      if (distance < 0) {
        clearInterval(interval.current)
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000);
  }

  useEffect(()=>{
    startTimer();
    return ()=>{
      clearInterval(interval.current)
    }
  })
  return (
    <div className="home">
      <Header />
      <div className="homecont">
        <div className="imagebanner">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active item1">
              <div className="img">
                <img src="/images/image1 (1).jpg" alt="" />
              </div>
              <div className="textbody">
                <div className="text">
                  <p>| BE A PARTNER</p>
                  <h2><b>"Your Small Help Can Make A Difference</b></h2>
                  <p>Through mutual support, encouragement, and collaboration, we find our voices resonating with greater clarity and depth, spreading the gospel of Christ to the world around us.</p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="join"><span>JOIN US</span></div>
                  <div className="partner"><span>PARTNER</span></div>
                </div>
              </div>
            </div>
            <div className="carousel-item item2">
              <div className="img">
                <img src="/images/image1 (4).jpg" alt="" />
              </div>
              <div className="textbody">
                <div className="text">
                  <p>| REVIVAL BECkONS</p>
                  <h2><b>"Embrace Growth, Ignite Revival.</b></h2>
                  <p>Get ready to be inspired beause of a new era of possibility and growth has arived! Let's embrace together and make the most of this incredible journey.For with God all things are possible</p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="join"><span>JOIN US</span></div>
                  <div className="partner"><span>GIVE</span></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="sec2 container-md ">
          <div className="sec2cont row">
            <div className="left col-md">
              <div className="img">
                <img src="/images/image1 (10).png" alt="" />
              </div>
              <div className="countdown text-center">
                  <div className="countdown-sect">
                    <h3><b>C O U N T D O W N</b></h3>
                    <div className="timer">
                      <section>
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                      </section>
                      <span>:</span>
                      <section>
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                      </section>
                      <span>:</span>
                      <section>
                        <p>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                      </section>
                      <span>:</span>
                      <section>
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                      </section>
                    </div>
                  </div>
              </div>
            </div>
            <div className="right col">
              <div className="sec2text">
                <div className="text mt-5">
                  <h3><b>FARO'S CAMPING MEETING</b></h3>
                  <p>Discover a spiritual journey like no other at the <span style={{color:"#6834d4"}}>FARO's December Camping Retreat</span>. This upcoming gathering promises an unforgettable experience for individuals and families sekking spiritual growth. </p>
                  <div className="expectation mt-2">
                    <h3><b>Come Expectant!</b></h3>
                    <p>Healing, Worship, Deliverance, Breakthrough, Teachings and lots more will take place.</p>
                    <span>Engage in biblical and spiritual teachings that deepens your faith and understanding with Apostle Micheal Favour and other powerful men of God</span>
                  </div>
                  <button className="register mt-4">
                    <span>REGISTER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec3 container-md">
          <div className="sec3cont row">
            <div className="left col">
              <h2><b>Who We Are</b></h2>
              <p>FARO's GLOBAL CHURCH (FARO meaning light house) is a ministry founded by Apst. Micheal Favour for the sole purpose of preaching the gospel and bringing end time revival to every creature.We are situated in the Eastern part of Nigeria, Owerri, Imo state to be precise but our operations are far beyond states, tribes, denomination etc.</p>
            </div>
            <div className="right col-md">
              <div className="img">
                <img src="/images/image1 (3).jpg" alt="" />
              </div>
              <div className="textbody">
                <div className="textcont">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec4 container-md">
          <p><b>P A R T I C I P A T E</b></p>
          <h3><b>Let's Make A Difference Today</b></h3>
          <div className="sec4cont row">
            <div className="col subsec">
              <div className="subsecont">
                <div className="iconcont">
                  <FaDollarSign className="icon"/>
                </div>
                <h3>DONATE TO SUPPORT</h3>
                <p>Join us in making a difference. Support our programs and outreaches financially and help change lives today</p>
                <button>Donate Now</button>
              </div>
            </div>
            <div className="col-md subsec">
              <div className="subsecont">
                <div className="iconcont">
                  <FaPeopleCarry className="icon"/>
                </div>
                <h3>BECOME A VOLUNTEER</h3>
                <p>Be part of the revival movement. Volunteer your time and skills to create positive change together.
                </p>
                <button>Join Us Now</button>
              </div>
            </div>
            <div className="col subsec">
              <div className="subsecont">
                <div className="iconcont">
                  <FaHandshake className="icon" />
                </div>
                <h3>BECOME A PARTNER</h3>
                <p>Let’s join forces and make a greater impact together through a meaningful partnership. Together, we can achieve</p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sec5 container-md about" id="about">
          <div className="sec5cont row">
            <div className="left col">
              <div className="video">
                <video src="/images/image1 (9).mp4" loop muted autoPlay></video>
              </div>
              <div className="leftcont row">
                <div className="volunteer col">
                  <h2 ><b>5k</b></h2>
                  <p>VOLUNTEERS</p>
                </div>
                <div className="sponspor col">
                  <h2><b>20+</b></h2>
                  <p>SPONSORS</p>
                </div>
                <div className="outreaches col">
                  <h2><b>50</b></h2>
                  <p>OUTREACHES</p>
                </div>
                <div className="conferences col">
                  <h2><b>10+</b></h2>
                  <p>CONFERENCES</p>
                </div>
              </div>
            </div>
            <div className="right col-md">
              <h2><b>ABOUT US</b></h2>
            </div>
          </div>
        </div>
        <div className="homefooter" style={{marginTop:"9rem"}}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home