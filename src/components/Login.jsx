import React from 'react'
import { Link } from 'react-router-dom'
import Partner from './Partner'

export default function Login() {
  return (
    <div>
        <div className='container-md'>
        <div className="register mt-5">
            <div className="heading">
                <h4 className='text-center mb-5' style={{fontFamily:"cursive"}}>LOGIN HERE</h4>
            </div>
            <form action="">
                <div className="cont">
                    <label htmlFor="email" id='email'>E-mail</label>
                    <input type="email" id='email' name='email' placeholder='example@gmail.com' required/>
                </div>
                <div className="cont">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' />
                </div>
                <input type="submit" value="Login" className=' submit mt-3'/>
            </form>
            <div className="mt-2">
                <p className='text-center'>Dont't have an account? <Link to="/register"><a>Sign-up</a></Link></p>
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
    </div>
  )
}
