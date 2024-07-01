import './posts.css';
import loc from '../assets/loc.png'
import editimg from '../assets/edit.png'
import error from '../assets/error.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import user4 from '../assets/user4.png'
import userimg1 from '../assets/userimg1.png'
import userimg2 from '../assets/userimg2.png'
import userimg3 from '../assets/userimg3.png'
import dots from '../assets/dots.png'
import eye from '../assets/eye.png'
import location from '../assets/loc.png'
import day from '../assets/day.png'
import work from '../assets/work.png'
import share from '../assets/share.png'
import group1 from '../assets/group1.png'
import group2 from '../assets/group2.png'
import group3 from '../assets/group3.png'
import group4 from '../assets/group4.png'
import thumb from '../assets/thumb.png'
import GroupButton from './Groupscom';

import { useState } from 'react';


const Posts = () => {
    
    const [edit,setEdit]=useState(false);
    const handleEdit=()=>{
        return setEdit(!edit);
    }



  return (
    <div className="post-flex">
        <div className="whole-box">
            <div className="post-box">
                <div className="post-container">
                    <img src={userimg1} alt="userimg1" className="userimg" />
                    <div className="padd">
                        <p className="title">✍️ Article</p>
                        <div className="heading-box">
                            <h3>What if famous brands had regular fonts? Meet RegulaBrands!</h3>
                            <img src={dots} alt="" /></div>
                        <p className='desc'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div  className="user-box">
                            <div className='user-col '><img className="user" src={user1} alt="" /><p className="user-name">Sarthak Kamra</p></div>
                            <div className='user-col'>
                                <div className="user-like"><img src={eye} alt="" /><p>1.4k views</p></div> 
                                <img src={share} className="share-img" alt="locpng" /> 
                            </div>
                        </div>
                    </div>

                </div>
                <div className="post-container">
                    <img src={userimg2} alt="" className="userimg"/>
                    <div className="padd">
                        <p className="title">🔬️ Education</p>
                        <div className="heading-box"><h3>Tax Benefits for Investment under National Pension Scheme launched by Government</h3><img src={dots} alt="" /></div>
                        <p className='desc'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                        <div className="user-box">
                            <div className="user-col "><img className="user" src={user2} /><p className="user-name">Sarah West</p></div>
                            <div className="user-col">
                                <div className="user-like"><img src={eye} alt="" /><p>1.4k views</p></div> 
                                <img src={share} className="share-img" alt="locpng" /> 
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className="post-container">
                    <img src={userimg3} alt="" className="userimg"/>
                    <div className="padd">
                        <p className="title">🗓️ Meetup</p>
                        <div className="heading-box"><h3>Finance & Investment Elite Social Mixer @Lujiazui</h3><img src={dots} alt="" /></div>
                        <div className="event-date">
                            <div className='user-col '><img src={day} alt="" /><p>Fri, 12 Oct, 2018</p></div>
                            <div className='user-col '><img src={location} alt="" /><p>Ahmedabad, India</p></div>
                        </div>
                        <div className='visitbtn'><button>Visit Website</button></div>
                        <div className="user-box">
                            <div className="user-col "><img className="user" src={user3} alt="user3" /><p className="user-name">Ronal Jones</p></div>
                            <div className="user-col">
                                <div className="user-like"><img src={eye} alt="" /><p>1.4k views</p></div> 
                                <img src={share} className="share-img" alt="sharepng" /> 
                            </div>
                        </div>
                    </div>

                </div>
                <div className="padd jobsec">
                <p className="title">💼️ Job</p>
                    <div className="heading-box"><h3>Software Developer</h3><img src={dots} alt="" /></div>
                    <div className='event-date'>
                        <div className='user-col'><img src={work} alt="" /><p>Innovaccer Analytics Private Ltd.</p></div>
                        <div className='user-col'><img src={location} alt="" /><p>Noida, India</p></div>
                    </div>
                    <div className='visitbtn '><button >Apply on Timesjobs</button></div>
                    <div className="user-box">
                        <div className="user-col "><img className="user" src={user4} alt="user3" /><p className="user-name">Joseph Gray</p></div>
                        <div className="user-col">
                            <div className="user-like"><img src={eye} alt="" /><p>1.4k views</p></div> 
                            <img src={share} className="share-img" alt="sharepng" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="leftbar">
                <div className="search-loc">
                    <img src={loc} alt="location" />
                    <input className="input" type="text"  onClick={handleEdit}/>
                   {!edit ? <img src={editimg} alt="edit"/>:""}
                </div>
                <div className="warn-mes">
                    <img src={error} alt="warnimg" />
                    <p>Your location will help us serve better and extend a personalised experience.</p>

                </div>
                <div className="groups">
                    <div className="group-head">
                        <img src={thumb} alt="" />
                        <p>RECOMMENDED GROUPS</p>
                    </div>
                    <GroupButton groupName="Leisure" groupImage={group1} />
                    <GroupButton groupName="Activism" groupImage={group2} />
                    <GroupButton groupName="MBA" groupImage={group3} />
                    <GroupButton groupName="Philosophy" groupImage={group4} />
                </div>
                
                <p className='alignp'>See More...</p>
            </div>
        </div>
    </div>
  )
}

export default Posts