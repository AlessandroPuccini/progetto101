import React,{ useState } from 'react'
import '../style/navbar.css';
import { Link } from 'react-router-dom';
import IMAGES from '../images/Images.jsx';
import TemporaryDrawer from './TemporaryDrawer.jsx';
import LongMenu from './LongMenu.jsx';


function Navbar() {

  return (
  
    <header className='header'>
        <LongMenu />
     <Link to={`/progetto101`} className='logo-section'><img className='logo' src={IMAGES.image3} alt='Logo'/></Link> 
      <div className='login-section' >
          <Link to={`/progetto101/admin`}  className='login' ><img src={IMAGES.image4} alt='login'></img></Link>
          <TemporaryDrawer/>
       </div>
    </header>
      
    
  )
}

export default Navbar;



