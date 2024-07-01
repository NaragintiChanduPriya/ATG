import  './createaccount.css'
import close from '../assets/cancel.png'
import create from '../assets/Create-img.png'
import eye from '../assets/eye.png'
import google from '../assets/gologo.png'
import fb from '../assets/fblogo.png'
import { useState } from 'react'
function CreateAccountForm({onClose,onSignin}) {
    const [signin,setSignin]=useState(false);
    const handleSignIn=()=>{
         return setSignin(!signin);

    }
 

return (
    <div className="modal-overlay">
        <div className="popup-container">
           
                  <div onClick={onClose} className='close-img'><img src={close} alt="" /></div>
                  <div className='form-container'>
                    <div className='para-text'><p className='para'>Let&apos;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    </div>
                    <div className="form-box">
                        <div>
                            <h1 className='head'>{!signin?"Create Account" :"Sign In" }</h1>
                            {!signin?
                            <div className='main-form'>
                               <div className='input-box flname'> 
                               <input type="text" name="" id="" placeholder="FirstName" className="firstname"/>
                               <input type="text" name="" id="" placeholder="LastName"/>
                               </div>
                               <div className='input-box'><input type="email"   name="" id="" placeholder='Email'/></div>                                
                               <div className='input-box eye-box'><input type="password"   name="" id="" placeholder='Password'/><img src={eye} alt="" /></div>
                                <div className='input-box'><input type="password"  placeholder='Confirm Password' name="" id="" /></div>
                            </div> :
                            <div className='main-form'>
                            <div className='input-box'><input type="email"   name="" id="" placeholder='Email'/></div>                                
                            <div className='input-box eye-box'><input type="password"   name="" id="" placeholder='Password'/><img src={eye} alt="" /></div>
                            </div> 
                            }
                            
                            <div className='create-btn' onClick={signin&&onSignin}><button>{!signin?"Create Account" :"Sign In" }</button></div>
                            <div className='mediabtn' onClick={signin&&onSignin}><img src={fb} alt="" /><p>{!signin?"Sign up with Facebook" :"Sign in with Facebook" }</p></div>
                            <div className='mediabtn' onClick={signin&&onSignin}><img src={google} alt="" /><p>{!signin?"Sign up with Google" :"Sign in with Google" } </p></div>
                            {signin&&<div className='forget-pass'>Forget Password?</div>}
                        </div>

                        <div className='sidebar'>
                            <p className='sign'>{!signin?"Already have an account?":"New User?"}<span onClick={handleSignIn}>{!signin?"Sign In":"Create Account"}</span></p>
                            <img src={create} />
                            {!signin&&<p className="terms">By signing up, you agree to our Terms & conditions, Privacy policy</p>} 
                        </div>
                    </div>
                  </div>
        

    
        </div>
    </div>
        

    );
}
export default CreateAccountForm;

