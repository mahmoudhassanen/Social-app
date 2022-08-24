import React, { useEffect, useState } from 'react'
import './Rightbar.css'
import  {Users}  from '../../dummyData'
import Online from '../Online/Online'
import { useLocation } from 'react-router-dom'
import { CommentsDisabledOutlined } from '@mui/icons-material'

export default function Rightbar({profile}) {
  let location = useLocation();
const Homrrightbar = () => 
{
  return (
    <> 
    
        <div className="birthdaaycontainer flex items-center">
          <img src="assets/gift.png" alt="" className="birthdayimg mt-3  " />
           <span className="birthdaytext  mt-4">
            <b> Mahmoud Ahmed </b> and <b>  3 other friends</b> have a birthday today,
            </span>   
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarad" />
        <h4 className="rightbartitle"> Online Friends</h4>
        <ul className="rightbarfriendlist">
        
         {Users.map((u) => 
         <Online user={u} key={u.id} />
         )}
         
        
          
          
        </ul>
   
     
    </>
  )
}
const Profilerightbar = () => 
{
  return (
    <>

<h4 className="rightbartiltle">User Information</h4>    
<div className="rightbaring">
  <div className="rightbarifoitem">
    <span className="rightbarinfokey me-2"> city : </span>
    <span className="rightbarinfoValue"> New York </span>


  </div>
  <div className="rightbarifoitem">
  <span className="rightbarinfokey me-2"> from : </span>
    <span className="rightbarinfoValue"> Madrid </span>
    

  </div>
  <div className="rightbarifoitem">
  
  <span className="rightbarinfokey me-2"> RelatioonShip : </span>
    <span className="rightbarinfoValue"> Single </span>

  </div>
  </div>
  <h4 className="rightbartiltle"> User Friends </h4>
  <div className="rightbarfollowings">
    <div className="rightbarfollowing">
      <img src="assets/person/1.jpeg" alt="" className="righbarfollowingimg" />
  <span className="followinname">Emilia</span>
    </div>
    <div className="rightbarfollowing">
      <img src="assets/person/4.jpeg" alt="" className="righbarfollowingimg" />
  <span className="followinname">Emilia</span>
    </div>
    <div className="rightbarfollowing">
      <img src="assets/person/2.jpeg" alt="" className="righbarfollowingimg" />
  <span className="followinname">Emilia</span>
    </div>
    <div className="rightbarfollowing">
      <img src="assets/person/3.jpeg" alt="" className="righbarfollowingimg" />
  <span className="followinname">Emilia</span>
    </div>
    <div className="rightbarfollowing">
      <img src="assets/person/6.jpeg" alt="" className="righbarfollowingimg" />
  <span className="followinname">John</span>
    </div>
    <div className="rightbarfollowing">
      <img src="assets/person/5.jpeg" alt="" className="righbarfollowingimg" />
  <span className="followinname">Emilia</span>
    </div>
    </div>  


    </>
  )
}
const [inIndex, setInIndex] = useState();
useEffect(() => {
  if (location.pathname === "/profile")
  {
    setInIndex(Profilerightbar())
    console.log(inIndex)
  }
  else {

    setInIndex(Homrrightbar())
  }

}, [location.pathname ])

  return (
    <div className='Rightbar'>
<div className="rightbarwrapper">
{inIndex}
</div>
    </div>
  )
}
