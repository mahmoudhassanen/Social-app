import React from 'react'
import '../Sidebar/Sidebar.css'
export default function Closefriend({user}) {
  return (
    <div>
       <li className="slidebarfriend mb-4">
                <img src={user.profilePicture} alt="" className="slidebarimg" />
                <span className="sliderbarfriendname"> {user.username}</span>
              </li>
    </div>
  )
}
