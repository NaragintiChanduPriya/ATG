import './Signup.css'
import fb from '../assets/fblogo.png'
import go  from '../assets/gologo.png'
import eye from '../assets/eye.png'
import { useState,useEffect } from 'react'
import close from '../assets/cancelbtn.png'




const Signup = ({edit}) => {

    const [signup,setSignup]=useState(false);
    const handleSignup=()=>{
         return setSignup(!signup);

    }
    
    
  return (
    <div className="back-box">
        <div></div>
        <div className='signup'>
        <div className='create-btw'>
            <h1>{!signup?"Create Account":"Welcome Back"}</h1>
            <img src={close} onClick={edit} alt="" />
        </div>
        {!signup?
                            <div className='sign-form'>
                               <div className='input-box flname'> 
                               <input type="text" name="" id="" placeholder="FirstName" className="firstname"/>
                               <input type="text" name="" id="" placeholder="LastName"/>
                               </div>
                               <div className='input-box'><input type="email"   name="" id="" placeholder='Email'/></div>                                
                               <div className='input-box eye-box'><input type="password"   name="" id="" placeholder='Password'/><img src={eye} alt="" /></div>
                                <div className='input-box'><input type="password"  placeholder='Confirm Password' name="" id="" /></div>
                            </div> :
                            <div className='sign-form'>
                            <div className='input-box'><input type="email"   name="" id="" placeholder='Email'/></div>                                
                            <div className='input-box eye-box'><input type="password"   name="" id="" placeholder='Password'/><img src={eye} alt="" /></div>
                            </div> 
                            }
                            <div className='signcreate'>
                            <div className='create-btn' ><button>{!signup?"Create Account" :"Sign In" }</button></div>
                            <p onClick={handleSignup}>{!signup?"or, Sign In":"or, Create Account"}</p>
                            </div>
                            <div className='mediab' ><img src={fb} alt="" /><p>{!signup?"Sign up with Facebook" :"Sign in with Facebook" }</p></div>
                            <div className='mediab' ><img src={go} alt="" /><p>{!signup?"Sign up with Google" :"Sign in with Google" } </p></div>
                            {signup&&<div className='forget-pas'>Forget Password?</div>}                     

    </div>
    </div>
  )
}

export default Signup

