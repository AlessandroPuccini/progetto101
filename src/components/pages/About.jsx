import React from 'react'
import IMAGES from '../../images/Images.jsx';
import Footer from '../Footer.jsx';
import Navbar from '../Navbar.jsx';


function About() {
  return (
    <>
    <Navbar />
    <div className='about-section'>
      <div className='about-text'>
     
       <h1>WE ARE 101</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Magnam eligendi in eius cupiditate, eos inventore maiores necessitatibus labore sequi placeat 
        magni vitae rerum minima dignissimos repellat aliquam molestias. 
        Error quidem illum incidunt corporis maxime provident quam fugit repudiandae perspiciatis sint dolores 
        reiciendis eos quia harum, nobis quas possimus eum totam consequatur dicta, recusandae, 
        et suscipit iusto neque. Molestias rem dolores eaque tempore, reprehenderit saepe cumque. 
        Necessitatibus voluptates voluptas dolore quae optio. Incidunt, nisi quod necessitatibus quos ratione 
        odit illo cupiditate explicabo. Assumenda maiores nam veniam sint ipsum vitae odit voluptatem, 
        quis distinctio doloribus placeat perferendis, nostrum dignissimos ipsam aperiam expedita?</p>
      </div>
      <div className='about-image'>
        
         <img src={IMAGES.image6} alt='about'/>
        
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About
