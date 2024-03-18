import React, { useState, useEffect} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Divider } from '@mui/material';
import '../../style/index.css';

function Admin3() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:4000/', {
      method: 'post',
      body: JSON.stringify({name, surname, email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
     result = await result.json();
     localStorage.setItem('users', JSON.stringify(result));
  }
    
  return (
    <>
    <Navbar />
    <main>
    <form onSubmit={collectData}>
       <div className='admin-text'>
        <h3> ALREADY HAVE AN ACCOUNT? SIGN IN</h3>
        </div>
    <div className='admin-login'>
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
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="surname">Surname</label>
      <input 
        id="surname"
        name="surname"
        type='text'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
    
      />
      <label htmlFor="address">Address</label>
      <input 
        id="address"
        name="address"
        type='text'
      />
      <label htmlFor="city">City</label>
      <input 
        id="city"
        name="city"
        type='text'
      />
      <label htmlFor="zip">Zip Code</label>
      <input 
        id="zip"
        name="zip"
        type='text'
      />
      <label htmlFor="email">Email</label>
      <input 
        id="email"
        name="email"
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input 
        id="password"
        name="password"
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
     </main>
    <Footer />
    </>
  )
}

export default Admin3


