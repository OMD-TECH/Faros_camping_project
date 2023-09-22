import { useState } from "react"
import { FaArrowLeft, FaBars, FaHandshake, FaHome, FaPhone, FaRegistered, FaUser } from "react-icons/fa"

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
                            <a href="#about">ABOUT</a>
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
                            <a href="#register">Register</a>
                        </li>
                    </ul>
                    <button className="existmenu" onClick={toggleMenu}>
                        <FaArrowLeft style={{margin:"auto .4rem"}}/>
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