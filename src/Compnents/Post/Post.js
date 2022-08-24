
import React, { useState } from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  {Users}  from '../../dummyData'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export default function Post({post}) {
  console.log(Users)
  const [like, setlike] = useState(post.like)
  const [isLiked, setisLiked] = useState(false)
  const likeHandler = ()=> {
setlike(isLiked ? like-1 : like+1)
setisLiked(!isLiked)
  } 
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='post'>
      <div className="postwraper">
        <div className="posttop">
        <div className="postleft">
            <img src={Users.filter((x) => x.id === post?.userId)[0].profilePicture} 
            alt="" className="postprofileimg" />
        <span className="postusername"> 
        {Users.filter((x) => x.id === post?.userId)[0].username}
         </span>
        <span className="postdate"> {post.date}</span>
        </div>
        <div className="postright">
            <MoreVertIcon className='posticon' />
        </div>
        </div>
        <div className="postcenter">
            <span className="posttext"> {post?.desc} </span>
            <img src={post.photo} alt="" className="postimg" />
            
      
        </div>
        <div className="postBottom flex justify-between items-center">
            <div className="postbottomleft flex items-center">
            <Checkbox {...label} icon={<ThumbUpAltIcon />} checkedIcon={<ThumbUpAltIcon />}  className='postlike'   onClick={()=> likeHandler()} />
                 <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}  className='postlike'   onClick={()=> likeHandler()} />
               
               
                <span className="postcounter">{like} people like it</span>
            </div>
            <div className="postbottomright">
                <span className="postcomment">{post.comment} comments</span>
            </div>
        </div>
        
      </div>
    </div>
  )
}
