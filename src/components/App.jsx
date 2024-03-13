import React from 'react';
import IMAGES from '../images/Images';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {

const handleClick = () => {
  window.location.href = '/progetto101/man';
}
const handleSecondClick = () => {
  window.location.href = '/progetto101/woman';
}

  return (
    <>
    
    <Navbar />
     <div id='homePage'>
          <div id='man'>
          <img src={IMAGES.image1} onClick={handleClick} alt='immagine uomo' />
          </div>
          <div id='woman'>
          <img src={IMAGES.image2} onClick={handleSecondClick} alt='immagine donna' />
          </div>
      
      </div>
   <Footer />
   
    </>
  );
}
export default App;
