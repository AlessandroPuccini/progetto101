import React from 'react'
import IMAGES from '../../images/Images.jsx';
import CardLine from '../CardLine.jsx';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import { Link } from 'react-router-dom';



function Man() {
  return (
    <>
    <Navbar />
    <main>
    <section className='man'>
      <div className='video-uomo'>
      <video loop autoPlay muted>
        <source  src={IMAGES.VideoUomo} type='video/mp4'/>
      </video>
      </div>
      <div className='card-line-section'> 
    
      <Link to={'/progetto101/mancatalog'}>
        <CardLine
        imgURL={IMAGES.LineaClassic}
        title='LINEA CLASSIC'></CardLine>
       </Link> 
   
       <Link to={'/progetto101/mancatalog'}><CardLine
       imgURL={IMAGES.LineaCarpet}
       title='LINEA CARPET'></CardLine>
       </Link>
      </div>
    </section>
    </main>
   <Footer />
    </>
  )
}

export default Man
