import { useState } from 'react'
import './maincontent.css'
import arrow from '../assets/arrow.png'

const Main = () => {
  const [jleave,setOpen]=useState(false);
  const handleOpened=()=>{
    return setOpen(!jleave);
  }
  // const [leavep,setLeave]=useState(false);
  // const handleLeave=()=>{
  //   return setLeave(!leavep);
  // }
  return (
    <div className='main'>
      <h3>Computer Engineering</h3>
      <p>142,765 Computer Engineers follow this</p>
      
      <div className='joingrp' onClick={handleOpened}>{!jleave?"Join ":"Leave"} Group</div>

      <img src={arrow} className='imgmain'/>
    </div>
  )
}

export default Main