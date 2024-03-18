import React from 'react';
import IMAGES from '../images/Images';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {

  return (
    <>
    
    <Navbar />
    <main>
     <div id='homePage'>
          <div id='man'>
       <Link to={'/progetto101/man'} ><img src={IMAGES.image1}alt='immagine uomo' />
       </Link>  
       </div>
          <div id='woman'>
       <Link to={'/progetto101/woman'}><img src={IMAGES.image2} alt='immagine donna' />
       </Link>
       </div>
      
      </div>
      </main>
   <Footer />
   
    </>
  );
}
export default App;
