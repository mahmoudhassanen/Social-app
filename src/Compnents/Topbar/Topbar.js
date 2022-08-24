import React, { useRef } from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'
import { Search , Person  , Chat , Notifications } from '@mui/icons-material'
export default function Topbar() {
    const menuRef = useRef()
    const menuToggle = () =>   menuRef.current.classList.toggle('Active-menu') 

    
  return (
    <div className='TobbarContainer sticky top-0  align-items-center' >
        <div className='Topbarleft'>
            <span className='logo'> Social App </span>
        </div>
        <div className='TopbarCenter  ' onClick={menuToggle} ref={menuRef}>
            <div className='Searchbar flex '>
                <Search className='SearchIcon ml-2.5	' />
                <input className='SearchInput' placeholder='Search for friend  , post or video'/>
            </div>
            <div className='TopbarLinks'   >
            <Link to="/Home">  <span className='TopbarLink'> HomePage </span> </Link>
            <Link to="/profile">  <span className='TopbarLink'> Profile </span> </Link>
             
         
            </div>
        </div>
        <div className='TopbarRight' >
            
            <div className='TopbarIcons flex'>
                <div className='TopbarIconsItems'>
                    <Person />
                    <span className='TopbarBadge absolute '>1</span>
                </div>
                <div className='TopbarIconsItems'>
                    <Chat />
                    <span className='TopbarBadge absolute'>2</span>
                </div>
                
                <div className='TopbarIconsItems'>
                    <Notifications/>
                    <span className='TopbarBadge absolute'>1</span>
                </div>
                
                
            </div>
            <img src="/assets/person/1.jpeg" alt="" className='TopbarImg' onClick={menuToggle}/>
            
        </div>
    </div>
  )
}
