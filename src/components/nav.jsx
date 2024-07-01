import { useState,useEffect } from 'react';
import Atglogo from '../assets/atglogo.png';
import search from '../assets/search.png';
import drop from '../assets/arrowdown.png';
import './nav.css';
import CreateAccountForm from './CreateAccount';
import user4 from '../assets/user4.png'

const Nav = () => {
    const [showForm, setShowForm] = useState(false);
    const [signconfirm,setSignconfirm]=useState(false);
    const [logout,setLogout]=useState(false);

    useEffect(() => {
        if (showForm) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      }, [showForm]);
    
    const handleCreateAccountClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };
    const handleConfirm =()=>{
        return setSignconfirm(!signconfirm);
    }
    const handleLogout=()=>{
        return setLogout(!logout);
    }
    return (
        <div className="nav">
            <img src={Atglogo} className="logo" alt="logo" />
            <div className="search-box">
                <img src={search} alt="search-box" />
                <p>Search for your favorite groups in ATG</p>
            </div>
            <div className="create-account">
                {!signconfirm?
                <p>
                <button onClick={handleCreateAccountClick}>Create Account.</button>
                <span>Its free!</span>
                </p>
            : 
               
                <div className='userlogin'><img src={user4} alt="" />Siddarth Goyal</div>
              
            }
            {showForm && <CreateAccountForm onClose={handleCloseForm} onSignin={handleConfirm}/>}
                {/* <img src={drop} alt="arrow-down"/> */}
                
                <div onClick={handleLogout}><img src={drop} alt="arrow-down" /></div>
                {signconfirm&&logout&&<div onClick={handleConfirm} className='logout'>Logout</div>}
                
            </div>

        </div>
    );
};

export default Nav;

