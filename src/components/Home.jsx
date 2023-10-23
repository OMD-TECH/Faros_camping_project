import { useEffect, useRef, useState } from "react"
import {Link} from "react-router-dom"
import Partner from "./Partner"
import AOS from "aos"
import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css"
import "aos/dist/aos.css"
import Join from "./Join"
import Sermons from "./Sermons";


window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});

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
    AOS.init({duration:1500, delay:0})
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
      <div className="imagebanner ">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active item1">
              <div className="img">
                <img src="/images/image2 (7).jpg" alt="" />
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
                <img src="/images/image1 (1).jpg" alt="" />
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
      <div className="p-2">

      <Sermons/>

      <div className="sec3 container-md" id="about" data-aos="fade-up">
          <div className="sec3cont row">
            <div className="left col leftloader" data-aos="fade-right">
              <div className="vision mt-5">
                <h4><b>WHO WE ARE</b></h4>
                <p>FAROS GLOBAL CHURCH (FAROS meaning light house) is a ministry founded by Apst. Micheal Favour for the sole purpose of preaching the gospel and bringing end time revival to every creature.We are situated in Federal University Of Technology Owerri (FUTO), Imo state to be precise but our operations are far beyond states, tribes, denomination etc.</p>
              </div>
              <div className="location">
                  <h4 ><b>OUR VISION</b></h4>
                  <p>To raise men with understanding and mastery of the times into different spheres of influence, by the revelation of the word and the Spirit for Kingdom advancement.
                  </p>
              </div>
              <Link to="/about">
                  <a className="learnmore">
                    <b>Learn More</b>
                  </a>
              </Link>
            </div>
            <div className="right col-md rightloader" data-aos="fade-left">
              <div className="img">
                <video src="/images/image1 (9).mp4" loop muted autoPlay></video>
                <div className="leftcont fading" data-aos="fade-left">
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
            </div>
          </div>
      </div>

        <br />

        <div className='sec2 container-md' id="register">
          <div className="sec2cont row ">
            <div className="left col-md rightloader" data-aos="fade-right">
              <div className="img">
                <img src="/images/image1 (11).png" alt="" />
              </div>
            </div>
            <div className="right col leftloader" data-aos="fade-left">
              <div className="sec2text">
                <div className="text">
                  <h3 className="text-center"><span className="h3" style={{fontWeight:"300"}}>UPGRADE CAMPING</span> MEETING</h3>
                  <p className="txt1">Discover a spiritual journey like no other at the <span className="faro">FARO's December Camping Retreat</span>. This upcoming gathering promises an unforgettable experience for individuals and families seeking spiritual growth.</p>
                  <div className="countdown text-center">
                  <div className="countdown-sect row" data-aos="fade-up">
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
                  <p className="h3">C O U N T D O W N</p>
                  </div>
                  <p><span className="h3" style={{fontWeight:"300"}}>Come Expectant!</span> Healing, Worship, Deliverance, Breakthrough, Teachings and lots more will take place. <span> Also engage in biblical and spiritual teachings that deepens your faith and understanding with Apostle Micheal Favour and other powerful men of God </span> <a href="https://forms.gle/uhJy7BGq366rkkT76" className="register">REGISTER NOW!.</a></p>
                  {/* <a href="https://forms.gle/uhJy7BGq366rkkT76" className="register mt-2">
                    <button>REGISTER NOW!</button>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-md swiffy-slider slider-item-show2 slider-nav-sm slider-nav-page slider-item-snapstart slider-nav-round slider-nav-dark slider-indicators-sm slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-slideup slider-item-first-visible testimonies">
          <h5>Testimonies:</h5>
          <div class="slider-container g-2" data-aos="fade-right">
              <div className="p-3 p-xl-3 text-light slide-visible">
                <div className="testimonial-head mb-4">
                  <div className="img">
                    <img src="/images/image1 (2).jpg" alt="" />
                  </div>
                  <h3 className="text-uppercase h5">Mr John Okafor</h3>
                </div>
                <hr />
                <p style={{fontWeight:"light"}}>
                  I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle.
                </p>
              </div>
              <div className="p-3 p-xl-3 text-light slide-visible">
                <div className="testimonial-head mb-4">
                  <div className="img">
                    <img src="/images/image1 (2).jpg" alt="" />
                  </div>
                  <h3 className="text-uppercase h5">Mr John Okafor</h3>
                </div>
                <hr />
                <p style={{fontWeight:"light"}}>
                  I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle.
                </p>
              </div>
              <div className="p-3 p-xl-3 text-light slide-visible">
                <div className="testimonial-head mb-4">
                  <div className="img">
                    <img src="/images/image1 (2).jpg" alt="" />
                  </div>
                  <h3 className="text-uppercase h5">Mr John Okafor</h3>
                </div>
                <hr />
                <p style={{fontWeight:"light"}}>
                  I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle.
                </p>
              </div>
              <div className="p-3 p-xl-3 text-light slide-visible">
                <div className="testimonial-head mb-4">
                  <div className="img">
                    <img src="/images/image1 (2).jpg" alt="" />
                  </div>
                  <h3 className="text-uppercase h5">Mr John Okafor</h3>
                </div>
                <hr />
                <p style={{fontWeight:"light"}}>
                  I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle.
                </p>
              </div>
              <div className="p-3 p-xl-3 text-light slide-visible">
                <div className="testimonial-head mb-4">
                  <div className="img">
                    <img src="/images/image1 (2).jpg" alt="" />
                  </div>
                  <h3 className="text-uppercase h5">Mr John Okafor</h3>
                </div>
                <hr />
                <p style={{fontWeight:"light"}}>
                  I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle.
                </p>
              </div>
              <div className="p-3 p-xl-3 text-light slide-visible">
                <div className="testimonial-head mb-4">
                  <div className="img">
                    <img src="/images/image1 (2).jpg" alt="" />
                  </div>
                  <h3 className="text-uppercase h5">Mr John Okafor</h3>
                </div>
                <hr />
                <p style={{fontWeight:"light"}}>
                  I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle. I'm baby edison bulb etsy franzen fixie messenger bag ugh hell of farm-to-table brunch. Tumeric hashtag meh pabst organic next level meggings whatever hella listicle.
                </p>
              </div>
              <div className="p-3 p-xl-5 slide-visible d-grid justify-content-center align-items-center" style={{backgroundColor:"white",border:"1px solid rgb(39,0,93)",borderRadius:"20px"}}>
                <a href="#">
                  <h3 className=" h5">Show All...</h3>
                </a>
              </div>
          </div>
          <button type="button" className="slider-nav" aria-label="Go left" style={{backgroundColor:"white",height:"fit-content",margin:"auto"}}></button>
          <button type="button" className="slider-nav slider-nav-next" aria-label="Go left" style={{backgroundColor:"white",height:"fit-content",margin:"auto"}}></button>

          <div className="slider-indicators d-md-none">
            <button className="active" aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
            <button aria-label="Go to slide" className=""></button>
            <button aria-label="Go to slide" className=""></button>
            <button aria-label="Go to slide" className=""></button>
            <button aria-label="Go to slide" className=""></button>
          </div>
        </div>
        
        <Partner />

        <Join />
      </div>
    </div>

      <div className="container-md swiffy-slider slider-item-show3 slider-nav-round slider-nav-page events slider-nav-sm slider-nav-page slider-item-snapstart slider-nav-round slider-nav-dark slider-indicators-sm slider-indicators-outside slider-indicators-round slider-indicators-dark ">
        <h5>All Upcoming Events:</h5>
        <ul className="slider-container">
            <li>
                <div className="card border-0">
                    <div className="ratio ratio-1x1">
                        <img src="/images/image1 (11).png" className="card-img-top" loading="lazy" alt="..."/>
                    </div>
                    <div className="card-body p-0 p-2">
                      <a href="/events/id">
                        <div className="d-flex">
                            <h3 className="flex-grow-1 h5"><b>UPGRADE CAMP MEETING</b></h3>
                        </div>
                        <p className="card-text">Discover a spiritual journey like no other at the FARO's December Camping Retreat.</p>
                      </a>
                    </div>
                </div>
            </li>
            <li>
                <div className="card border-0">
                    <div className="ratio ratio-1x1">
                        <img src="/images/image1 (11).png" className="card-img-top" loading="lazy" alt="..."/>
                    </div>
                    <div className="card-body p-0 p-2">
                      <a href="/events/id">
                        <div className="d-flex">
                            <h3 className="flex-grow-1 h5"><b>UPGRADE CAMP MEETING</b></h3>
                        </div>
                        <p className="card-text">Discover a spiritual journey like no other at the FARO's December Camping Retreat.</p>
                      </a>
                    </div>
                </div>
            </li>
            <li>
                <div className="card border-0">
                    <div className="ratio ratio-1x1">
                        <img src="/images/image1 (11).png" className="card-img-top" loading="lazy" alt="..."/>
                    </div>
                    <div className="card-body p-0 p-2">
                      <a href="/events/id">
                        <div className="d-flex">
                            <h3 className="flex-grow-1 h5"><b>UPGRADE CAMP MEETING</b></h3>
                        </div>
                        <p className="card-text">Discover a spiritual journey like no other at the FARO's December Camping Retreat.</p>
                      </a>
                    </div>
                </div>
            </li>
            <li>
                <div className="card border-0">
                    <div className="ratio ratio-1x1">
                        <img src="/images/image1 (11).png" className="card-img-top" loading="lazy" alt="..."/>
                    </div>
                    <div className="card-body p-0 p-2">
                      <a href="/events/id">
                        <div className="d-flex">
                            <h3 className="flex-grow-1 h5"><b>UPGRADE CAMP MEETING</b></h3>
                        </div>
                        <p className="card-text">Discover a spiritual journey like no other at the FARO's December Camping Retreat.</p>
                      </a>
                    </div>
                </div>
            </li>
        </ul>
        <button type="button" className="slider-nav" aria-labelledby="Go left" ></button>
        <button type="button" className="slider-nav slider-nav-next" aria-labelledby="Go left" ></button>

        <div className="slider-indicators d-md-none">
            <button className="active" aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
            <button aria-label="Go to slide" className=""></button>
            <button aria-label="Go to slide" className=""></button>
            <button aria-label="Go to slide" className=""></button>
            <button aria-label="Go to slide" className=""></button>
          </div>
      </div>
  </div>
  )
}

export default Home