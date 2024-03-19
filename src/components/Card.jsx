import React from 'react'

function Card({title, imgURL, price, description}) {


  return (

    <div className='card'>
      <img src={imgURL} alt='Abby Arancio A' />
        <div className='card-text'>
            <h3>{title}</h3>
            <p>€ {price}</p>
            {/* <p>{description}</p> */}
            
        </div>
    </div>
    
  );
};

export default Card
