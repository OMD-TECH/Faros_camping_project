import React from 'react'
import Partner from "./Partner"
import {Link} from  "react-router-dom"

export default function Register() {
  return (
    <div className='container-md'>
        <div className="register mt-5">
            <div className="heading">
                <h4 className='text-center mb-5' style={{fontFamily:"cursive"}}>REGISTER HERE</h4>
            </div>
            <form action="">
                <div className="cont">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' placeholder='firstname lastname' required/>
                </div>
                <div className="cont">
                    <label htmlFor="phone" id='phone'>Phone</label>
                    <input type="tel" id='phone' name='phone' placeholder='+234 123456789' required/>
                </div>
                <div className="cont">
                    <label htmlFor="email" id='email'>E-mail</label>
                    <input type="email" id='email' name='email' placeholder='example@gmail.com' required/>
                </div>
                <div className="cont">
                    <label htmlFor="country">country/city</label>
                    <input type="text" id='country' name='country' required placeholder=''/>
                </div>
                <div className="cont">
                    <label htmlFor="password1">Password</label>
                    <input type="password" id='password1' name='password1' />
                </div>
                <div className="cont">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" id='password2' name='password2' required/>
                </div>
                <input type="submit" value="Register" className=' submit mt-3'/>
            </form>
            <div className="mt-2">
                <p className='text-center'>Already have an account? <Link to="/register"><a>Sign-in</a></Link></p>
            </div>
            <div className="google">
                <div className="img">
                  <img src="/images/google.jpeg" alt=""/>
                </div>
                <Link to="/google"><a>Sign-in with Google</a></Link>
            </div>
        </div>    
        <Partner/>
    </div>
  )
}
