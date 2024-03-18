import React from 'react';
import IMAGES from '../../images/Images.jsx';
import CardLine from '../CardLine.jsx';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import { Link } from 'react-router-dom';


function Woman() {


  return (
    <>
    <Navbar />
    <main>
    <section className='woman'>
      <div className='video-donna'>
      <video loop autoPlay muted>
        <source  src={IMAGES.VideoDonna} type='video/mp4'/>
      </video>
      </div>
      <div className='card-line-section'> 
      <Link to={'/progetto101/womancatalog'}> <CardLine 
       imgURL={IMAGES.LineaAmber}
       title='LINEA AMBER'></CardLine>
       </Link>
       <Link to={'/progetto101/womancatalog'}>
        <CardLine 
          imgURL={IMAGES.LineaBass}
          title='LINEA BASS'></CardLine>
          </Link>
      </div>
    </section>
    </main>
   <Footer />
    </>
  )
}

export default Woman
