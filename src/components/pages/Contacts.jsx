import React from 'react'
import { Button } from '@mui/material'
import Navbar from '../Navbar'
import Footer from '../Footer'


function Contacts() {

const handleClick = () => {
  alert('Thank you!, We will answer to your email as quick as possible');
}

  return (
    <>
    <Navbar />
    <main>
    <div className='contact-paragraph'>
      <h3>QUESTIONS? WE ARE HERE TO HELP YOU</h3>
      <p>We will answer to every email within 24 hours Monday to Friday, excluding holidays.
        <br></br>
        If you prefer, you can call us on +39 0732 346739 or +39 343 4590897: we are at your disposal from Monday to Friday, from 9.00 to 18.00 CET, excluding holidays. </p>
    </div>
    <div className='contact-form'>
       <input type='text' placeholder='Name' />
       <input type='text' placeholder='Surname' />
       <input type='text' placeholder='Numero ordine' />
       <input type='text' placeholder='Email' />
        <textarea placeholder='Message' />
        <button onClick={handleClick}>Send</button>
    </div>
    </main>
    <Footer />
    </>
  )
}

export default Contacts
