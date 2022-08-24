import React from 'react'
import './Share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='ShareParent'>
      <div className="Sharewrapper">
        <div className="Sharetop flex ">
            <img src="/assets/person/1.jpeg" alt="" className='shareprofileimg'/>
             <input type="text" placeholder="what's in your mind"  className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom flex">
            <div className="shareoptions flex ml-5">
                <div className="shareoption me-5">
                    <PermMediaIcon   htmlColor='green' className='shareicon'/>
                    <span className="shareoptiontext">Photo or Video </span>
                </div>
                <div className="shareoption me-5">
                    <LabelIcon  htmlColor='blue' className='shareicon'/>
                    <span className="shareoptiontext">Tag </span>
                </div>
                <div className="shareoption me-5">
                    <LocationOnIcon  htmlColor='tomato' className='shareicon'/>
                    <span className="shareoptiontext">Location </span>
                </div>
                <div className="shareoption me-5">
                    <EmojiEmotionsIcon  htmlColor='goldenrod' className='shareicon'/>
                    <span className="shareoptiontext">Feelings </span>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}
