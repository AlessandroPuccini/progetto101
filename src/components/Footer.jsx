import React from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import Userlist from './Userlist';



function Footer() {

  const handleClick = () => {
    window.location.href = '/progetto101/userlist';
  }

  return (
    <section className='footer-section'>
  
      <div className='footer-text'>
     <a href=''><h6>Terms and Conditions</h6></a> 
     </div>
     <div className='footer-text'>
     <a href=''><h6>Privacy policy</h6></a> 
     </div>
      <div className='footer-text'>
     <a href=''><h6>Newsletter</h6></a> 
      </div>
      {/* <div className='footer-button'>
        <button onClick={handleClick}>User List</button>
        </div> */}
      <div className='social'>
      <InstagramIcon fontSize='large'/> 
      <LinkedInIcon fontSize='large'/>
      <FacebookIcon fontSize='large'/>
      <XIcon fontSize='large'/>
      </div>

      <div className='copy'>
        &copy; 2024
      </div>
    </section>
  )
}

export default Footer


