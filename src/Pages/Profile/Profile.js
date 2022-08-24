import React from 'react'
import Feed from '../../Compnents/Feed/Feed'
import Rightbar from '../../Compnents/Rightbar/Rightbar'
import Sidebar from '../../Compnents/Sidebar/Sidebar'
import Topbar from '../../Compnents/Topbar/Topbar'
import './Profile.css'

export default function Profile() {
  return (
    <div>
       <Topbar />
        <div className='HomeContainer '>
            <div className="profile flex">
            <Sidebar />
            
          <div className="profileright">
            <div className="profilerighttop">
              <div className="profilecover">
              <img src="assets/post/3.jpeg" alt="" className="profilecoverimg" />
              <img src="assets/person/1.jpeg" alt="" className="progileimg" />
              </div>
              <div className="profiledesc">
                <h4 className='profilename'>  Safak Kocaoglu   </h4>
                <span className="profiledescriptioon">
                  Hello My friend
                </span>
              </div>
             
                </div>
                <div className="profilerightbottom flex">
                <Feed />
               <Rightbar profile />
                </div>
          </div>
          </div>
        </div>
    </div>
  )
}
