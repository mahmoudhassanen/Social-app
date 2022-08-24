import React, { useState } from 'react'
import './Sidebar.css'
import { RssFeed , Chat , PlayCircle ,Group ,Bookmark    , Event } from '@mui/icons-material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FlagIcon from '@mui/icons-material/Flag';
import {Users, Ussers} from '../../dummyData'
import Closefriend from '../CloseFriend/Closefriend';
export default function Sidebar() {
  const [Toggle, setToggle] = useState(true)
  
  return (
    
    <div className='Sidebar '>
        <div className='SideWrapper '>
            <ul className="Slidebarlist  ">
              
                  {Toggle ? <> 
                  
                    <li className="SlidebarItems">
                    <RssFeed className='slidebaricon icon1' />
                    <span className="slidebaritemtext">Feeds</span>
                </li>
                <li className="SlidebarItems">
                    <Chat className='slidebaricon icon2' />
                    <span className="slidebaritemtext">Chat</span>
                </li>
                <li className="SlidebarItems">
                    <PlayCircle className='slidebaricon icon3' />
                    <span className="slidebaritemtext">Videos</span>
                </li>
                <li className="SlidebarItems">
                    <Group className='slidebaricon icon4' />
                    <span className="slidebaritemtext">Groups</span>
                </li>
                <li className="SlidebarItems">
                    <Bookmark className='slidebaricon icon5'/>
                    <span className="slidebaritemtext">Bookmarks</span>
                </li>
                <li className="SlidebarItems">
                    <HelpOutlineIcon className='slidebaricon icon6' />
                    <span className="slidebaritemtext">Questions</span>
                </li>
                <li className="SlidebarItems" onClick={() => setToggle(false)}>
                    <KeyboardArrowDownRoundedIcon className='slidebaricon' />
                    <span className="slidebaritemtext">See More</span>
                </li>
                  </> : 
                  <>
                  
                  <li className="SlidebarItems">
                    <RssFeed className='slidebaricon icon1' />
                    <span className="slidebaritemtext">Feeds</span>
                </li>
                <li className="SlidebarItems">
                    <Chat className='slidebaricon icon2' />
                    <span className="slidebaritemtext">Chat</span>
                </li>
                    <li className="SlidebarItems">
                    <PlayCircle className='slidebaricon icon3' />
                    <span className="slidebaritemtext">Videos</span>
                </li>
                <li className="SlidebarItems">
                    <Group className='slidebaricon icon4' />
                    <span className="slidebaritemtext">Groups</span>
                </li>
                <li className="SlidebarItems">
                    <Bookmark className='slidebaricon icon5'/>
                    <span className="slidebaritemtext">Bookmarks</span>
                </li>
                <li className="SlidebarItems">
                    <HelpOutlineIcon className='slidebaricon icon6' />
                    <span className="slidebaritemtext">Questions</span>
                </li>
                <li className="SlidebarItems">
                    <FlagIcon className='slidebaricon icon7' />
                    <span className="slidebaritemtext">Pages</span>
                </li>
                <li className="SlidebarItems">
                    <Event className='slidebaricon icon8' />
                    <span className="slidebaritemtext">Events</span>
                </li>
                <li className="SlidebarItems">
                    <AutoStoriesIcon className='slidebaricon icon9' />
                    <span className="slidebaritemtext">Stories</span>
                </li> 
                <li className="SlidebarItems" onClick={()=> setToggle(true)}>
                    <ExpandLessRoundedIcon className='slidebaricon' />
                    <span className="slidebaritemtext"> See Less</span>
                </li> 

                  </>
                  }
                
              

               
                
                   
               
                             
              
                
               
                
            </ul>
           
            <hr className="slidebarhr " />


            <ul className="sidebarfriendlist">
              <h2 className="sidebarh2 my-5 text-xl  text-gray-400 tracking-widest fw-bolder ">Your Friend</h2>
             {Users.map((x)=> 
             <Closefriend key={x.id} user={x} />
             )}
           
            </ul>
        </div>
    </div>
  )
}
