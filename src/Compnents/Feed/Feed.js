import React from 'react'
import Post from '../Post/Post'

import Share from '../Share/Share'
import './Feed.css'
import  {Posts}  from '../../dummyData'

export default function Feed() {
  return (
    <div className='Feedbar'>
      <div className="feedbarwrapper">
        <Share />
        {Posts.map((p)=> 
            <Post key={p.id} post={p} />
        )}
    
       
      </div>
    </div>
  )
}
