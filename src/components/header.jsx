import { useState } from "react"
import {Link} from  "react-router-dom"
import { FaArrowLeft, FaBars, FaHandshake, FaHome, FaPhone, FaRegistered, FaUser } from "react-icons/fa"

function Header () {
    
    const [display,setdisplay] = useState(false)
    function toggleMenu() {
        setdisplay(prev => !prev)
    }

    return(
        <>
        <div className="header container-fluid">
            <div className="left">
                <img src="/images/faroslogo.png" alt="" />
            </div>
            <div className={`overlayheader ${display && 'show'}`}>
                <div className="right">
                    <ul className="menu">
                        <a href="/">
                            <li>
                                <FaHome className="icon"/>
                                <span>HOME</span>
                            </li>
                        </a>
                        <a href="/about">
                            <li >
                                <FaUser className="icon"/>
                                <span>ABOUT</span>
                            </li>
                        </a>
                        <a href="#contact">
                            <li>
                               <FaPhone className="icon"/>
                                <span>CONTACT-US</span>
                            </li>
                        </a>
                        <a href="#partner">
                            <li>
                                <FaRegistered className="icon"/>
                                <span><span>GIVE</span> | <span>PARTNER</span></span>
                            </li>
                        </a>
                        <a href="/login" className="part">
                            <li className="part">
                                <FaHandshake className="icon"/>
                                <span>Login</span>
                            </li>
                        </a>
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
        </>
    )
}

export default Header