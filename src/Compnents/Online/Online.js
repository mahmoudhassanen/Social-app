import React from 'react'
import '../Rightbar/Rightbar.css'

export default function Online({user}) {
  return (
    <div>
          <li className="rightbarfriend">
            <div className="rightbarprofileimg">
              <img src={user.profilePicture} alt="" className="rightbarprofile " />
               <span className="rightbaronline"></span>
            </div>

            <span className="rightbarusername ms-2"> {user.username} </span>
          </li>
      
    </div>
  )
}
