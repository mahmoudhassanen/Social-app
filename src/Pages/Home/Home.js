import React from 'react'
import Feed from '../../Compnents/Feed/Feed'
import Rightbar from '../../Compnents/Rightbar/Rightbar'
import Sidebar from '../../Compnents/Sidebar/Sidebar'
import Topbar from '../../Compnents/Topbar/Topbar'
import './Home.css'
export default function Home() {
  return (
    <div > 

        <Topbar />
        <div className='HomeContainer flex'>
            <Sidebar className=''/>
            <Feed />
            <Rightbar />
        </div>
    </div>
  )
}
