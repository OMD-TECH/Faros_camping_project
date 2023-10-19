import { useState } from "react"
import {Link} from  "react-router-dom"
import { FaArrowLeft, FaBars, FaHandshake, FaHome, FaLock, FaPhone, FaRegistered, FaUser } from "react-icons/fa"

function Header () {
    
    const [display,setdisplay] = useState()
    function toggleMenu() {
        if (display===undefined) {
            setdisplay("show")
        }else{
            setdisplay()
        }
    }

    return(
        <div className="header container-fluid">
            <div className="left">
                <img src="/images/faroslogo.png" alt="" />
            </div>
            <div className={`overlayheader ${display}`}>
                <div className="right">
                    <ul className="menu">
                        <li>
                            <FaHome className="icon"/>
                            <a href="/">HOME</a>
                        </li>
                        <li >
                            <FaUser className="icon"/>
                            <a href="/about">ABOUT</a>
                        </li>
                        <li>
                           <FaPhone className="icon"/>
                            <a href="#contact">CONTACT-US</a>
                        </li>
                        <li>
                            <FaRegistered className="icon"/>
                            <a href="#partner"><span>GIVE</span> | <span>PARTNER</span></a>
                        </li>
                        <li className="part">
                            <FaHandshake className="icon"/>
                            <Link to="/login"><a>Login</a></Link>
                        </li>
                    </ul>
                    <button className="existmenu" onClick={toggleMenu}>
                        <div className="overlay">
                            <FaArrowLeft style={{margin:"auto .4rem", fontSize:"1.5rem"}}/>
                        </div>
                    </button>
                </div>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                <FaBars />
            </button>
        </div>
    )
}

export default Header