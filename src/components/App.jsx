import React from 'react';
import IMAGES from '../images/Images';
import { Link } from 'react-router-dom';

function App() {


  return (
    <>
     <div id='homePage'>
          {/* <Link to='/man'> */}
          <img src={IMAGES.image1} alt='immagine uomo' />
          {/* </Link> */}
       {/* <Link to='/woman'> */}
          <img src={IMAGES.image2} alt='immagine donna' />
          {/* </Link> */}
      </div>
   
    </>
  );
}
export default App;
