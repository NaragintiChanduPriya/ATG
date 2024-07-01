import './postnav.css'
import { useState,useEffect } from 'react'
import arrow from '../assets/arrowdown.png'
import group from '../assets/group.png'
import exit from '../assets/exit.png'
import arrowdown from '../assets/arrowdown.png'
import edit from '../assets/editw.png'
import Signup from './Signup'


const Postnav = () => {
  const [leave,setLeave]=useState(false);
  const handleLeave=()=>{
    return setLeave(!leave);
  }
  const [form,setForm]=useState(false);
  useEffect(() => {
    if (form) {
      document.body.classList.add('no-scrollbar');
    } else {
      document.body.classList.remove('no-scrollbar');
    }
  }, [form]);

const handleCreateForm = () => {
    setForm(true);
};

const handleForm = () => {
    setForm(false);
};
  return (
    <div className='container'>
        <hr className="line"/>
        <div className='pnav'>
           <div className="option">
           <p className='dark'>All Posts(32)</p>
            <p>Article</p>
            <p>Event</p>
            <p>Education</p>
            <p>Job</p>
           </div>
           <div className="access">
            <button className='postbutton'>Write a Post <img src={arrow} alt="" /></button>
            <button className={!leave?'joinbutton':'leavebtn'} onClick={handleLeave}><img src={!leave?group:exit} alt="" /> {!leave?"Join":"Leave"} Group</button>
           </div>
        </div>
        <div className='pnav-sm'>
          <h2>Posts (368)</h2>
          <button>Filter: All  <img src={arrowdown} alt="" /></button>

        </div>
        <div className='edit-box' onClick={handleCreateForm}><img src={edit} alt="" /></div>
        {form&&<Signup edit={handleForm}/>}
       
    </div>
  )
}

export default Postnav