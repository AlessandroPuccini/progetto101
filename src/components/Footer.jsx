import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';



function Footer() {
  return (
    <section className='footer-section'>
  
      <div>
     <a href=''><h6>Terms and Conditions</h6></a> 
      </div>
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

