import React from 'react'
import IMAGES from '../images/Images'

function Video() {
  return (
    <div className='videoCard' >
      <video loop autoPlay muted>
        <source src={IMAGES.VideoUomo} type='video/mp4'/>
      </video>
    </div>
  )
}

export default Video
