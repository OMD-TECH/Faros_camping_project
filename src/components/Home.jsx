import { useEffect, useRef, useState } from "react"
import {Link} from "react-router-dom"
import Partner from "./Partner"
import AOS from "aos"
import "aos/dist/aos.css"




function Home() {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  // const [animationLoader,setAnimationLoader] =  useState('')

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
    AOS.init({duration:1000, delay:0})
  },[])

  useEffect(()=>{
    startTimer();
    return ()=>{
      clearInterval(interval.current)
    }
  })


  return (
    <div className="home">
      <div className="homecont">
        <div className="imagebanner container-fluid mt-3">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active item1">
              <div className="img">
                <img src="/images/image1 (1).jpg" alt="" />
              </div>
              <div className="textbody">
                <div className="text">
                  <p className="leftloader mb-5">| BE A PARTNER</p>
                  <h2 className="rightloader"><b>"Your Small Help Can Make A Difference</b></h2>
                  <p className="rightloader">Through mutual support, encouragement, and collaboration, we find our voices resonating with greater clarity and depth, spreading the gospel of Christ to the world around us.</p>
                <div className="d-flex leftloader mt-5">
                  <div className="join"><span>JOIN US</span></div>
                  <div className="partner"><span>PARTNER</span></div>
                </div>
                </div>
              </div>
            </div>
            <div className="carousel-item item2">
              <div className="img">
                <img src="/images/image1 (4).jpg" alt="" />
              </div>
              <div className="textbody">
                <div className="text">
                  <p className="leftloader mb-5">| REVIVAL BECkONS</p>
                  <h2 className="rightloader"><b>"Embrace Growth, Ignite Revival.</b></h2>
                  <p className="rightloader">Get ready to be inspired beause of a new era of possibility and growth has arived! Let's embrace together and make the most of this incredible journey.For with God all things are possible</p>
                <div className="d-flex leftloader mt-5">
                  <div className="join"><span>JOIN US</span></div>
                  <div className="partner"><span>GIVE</span></div>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='sec2 container-md' id="register">
          <div className="sec2cont row">
            <div className="left col-md rightloader" data-aos="fade-right">
              <div className="img">
                <img src="/images/image1 (10).png" alt="" />
              </div>
              <div className="countdown text-center">
                  <div className="countdown-sect" data-aos="fade-up">
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
            <div className="right col leftloader" data-aos="fade-left">
              <div className="sec2text">
                <div className="text">
                  <h3 className="text-center"><b >FARO'S CAMPING MEETING</b></h3>
                  <p className="txt1">Discover a spiritual journey like no other at the <span className="faro">FARO's December Camping Retreat</span>. This upcoming gathering promises an unforgettable experience for individuals and families seeking spiritual growth. </p>
                  <div className="expectation mt-2">
                    <h3 className="text-center mt-5"><b>Come Expectant!</b></h3>
                    <p>Healing, Worship, Deliverance, Breakthrough, Teachings and lots more will take place. <span>
                      Also engage in biblical and spiritual teachings that deepens your faith and understanding with Apostle Micheal Favour and other powerful men of God.</span></p>
                  </div>
                    <a href="https://forms.gle/uhJy7BGq366rkkT76" className="register mt-2">
                      <button>REGISTER</button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec3 container-md" id="about" data-aos="fade-up">
          <div className="sec3cont row">
            <div className="left col leftloader" data-aos="fade-right">
              <h2><b>ABOUT THE CAMP MEETING</b></h2>
              <div className="vision mt-5">
                <h4><b>THE VISION</b></h4>
                <p>vision vision vision vision vision vision vision vision vision vision vision vision vision vision visionvision vision vision vision vision vision vision vision vision vision vision </p>
              </div>
              <div className="location">
                <h4><b>LOCATION</b></h4>
                <p><b>GOSHEN, ANGLICAN RETREAT CENTER</b></p>
                <p>Plot P/10 AREA B, OFF AREA H, BY INDEX FILLING STATION</p>
              </div>
            </div>
            <div className="right col-md rightloader" data-aos="fade-left">
              <div className="img">
                <img src="/images/image1 (3).jpg" alt="" />
              </div>
              <div className="textbody">
                <div className="textcont" data-aos="fade-up-left">
                  <h3><b>Come And Be Transformed.</b></h3>
                  <p>There will be a lot of teachings on different aspects of life both spiritually and physically that will Transforme your spiritual life when it comes to Prayer and the Word, financial life and so on. There will be a mindset upgrade, healing miracles, financial breakthrough. <span className="come">Come and see God doing wonders!.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec5 container-md " data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <div className="sec5cont row">
            <div className="left col leftloader" data-aos="zoom-in">
              <div className="video">
                <video src="/images/image1 (9).mp4" loop muted autoPlay></video>
              </div>
              <div className="leftcont row fading" data-aos="fade-left">
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
            <div className="right col-md rightloader" data-aos="fade-right">
              <h2><b>ABOUT US</b></h2>
              <div className="textbody p-2 ">
                <p>FARO's GLOBAL CHURCH (FARO meaning light house) is a ministry founded by Apst. Micheal Favour for the sole purpose of preaching the gospel and bringing end time revival to every creature.We are situated in Federal University Of Technology Owerri (FUTO), Imo state to be precise but our operations are far beyond states, tribes, denomination etc.</p>
                <div className="vision">
                  <h3 className="text-center"><b>Vision Statement</b></h3>
                  <p>To raise men with understanding and mastery of the times into different spheres of influence, by the revelation of the word and the Spirit for Kingdom advancement.
                  </p>
                </div>
                  <Link to="/about">
                    <button className="learnmore">
                      <b>Learn More</b>
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Partner />
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
    </div>
  )
}

export default Home