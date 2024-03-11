import React from 'react'
import IMAGES from '../images/Images'

function Badge( {withNumber = false}) {
  return (
    <article className='cart-widget'>
      <img src={IMAGES.image5}/>
      { withNumber!== false && <span>{withNumber}</span>}
    </article>
  )
}

export default Badge
