import React, { useState, useEffect} from 'react'

import Navbar from '../Navbar';
import Footer from '../Footer';
import { Divider } from '@mui/material';
import '../../style/index.css';

function Admin3() {
  
    
  return (
    <>
    <Navbar />
    <form>
       <div className='admin-text'>
        <h3> ALREADY HAVE AN ACCOUNT? SIGN IN</h3>
        </div>
    <div className='admin-login'>
      <label htmlFor="email">Email</label>
      <input 
        id="email"
        name="email"
        type='email'
      />
      <label htmlFor="password">Password</label>
      <input 
        id="password"
        name="password"
        type="password"

      />
      <div className='admin-button'>
     <button type='submit'>Sign in</button>
     </div>
    </div>  
    <Divider />
    <div className='admin-text'>
    <h3>OR SIMPLY SIGNUP HERE</h3>
    </div>
    <div className='admin-login'>
    
    <label htmlFor="name">Name</label>
      <input 
        id="name"
        name="name"
      />
      <label htmlFor="surname">Surname</label>
      <input 
        id="surname"
        name="surname"
    
      />
      <label htmlFor="address">Address</label>
      <input 
        id="address"
        name="address"
    
      />
      <label htmlFor="city">City</label>
      <input 
        id="city"
        name="city"
    
      />
      <label htmlFor="zip">Zip Code</label>
      <input 
        id="zip"
        name="zip"
      />
      <label htmlFor="email2">Email</label>
      <input 
        id="email2"
        name="email2"
        type='email'
      />
      <label htmlFor="password2">Password</label>
      <input 
        id="password2"
        name="password2"
        type='password'
      />
      <label htmlFor="passwordCheck">Password Check</label>
      <input 
        id="passwordCheck"
        name="passwordCheck"
        type="password"
       
      />
      <div className='admin-button'>
     <button type='submit'>Sign up</button>
    </div>

    </div>
     </form>
    <Footer />
    </>
  )
}

export default Admin3


