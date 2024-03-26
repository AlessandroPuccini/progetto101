import React, { useState, useEffect} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Divider } from '@mui/material';
import '../../style/index.css';

function Admin() {
const [name, setName] = useState('');
const [surname, setSurname] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [zipcode, setZipcode] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordCheck, setPasswordCheck] = useState('');
const [feedBackMessage, setFeedBackMessage] = useState('');
const [loginMessage, setLoginMessage] = useState('');
const [email2, setEmail2] = useState('');
const [password2, setPassword2] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();
  const userData = {
    name: name,
    surname: surname,
    address: address,
    city: city,
    zipcode: zipcode,
    email: email,
    password: password,
    passwordCheck: passwordCheck,

  };
 fetch('http://localhost:5050/record/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
 })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  })
  .then(data => {
    setFeedBackMessage('User registered successfully!');
    setName('');
    setSurname('');
    setAddress('');
    setCity('');
    setZipcode('');
    setEmail('');
    setPassword('');
    setPasswordCheck('');
  })
  .catch(error => {
    console.error('Error during the registration:', error);
  })
 };

const handleLogin = async (event) => {
  event.preventDefault();
  try{
    const response = await fetch('http://localhost:5050/record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email2, password: password2}),
    });
    if(response.ok){
      const data = await response.json();
      console.log('User ID:', data.userId);
      setLoginMessage('Login successful!');
    }else{
      console.error('Login failed, please try again or sign up below');
      setLoginMessage('Login failed, please try again or sign up below');
    }
    }catch(error){
      console.error('Error during login:', error);

  }
};


  return (
    <>
    <Navbar />
    <main>
    <form onSubmit={handleLogin}>
       <div className='admin-text'>
        <h3> ALREADY HAVE AN ACCOUNT? SIGN IN</h3>
        </div>
        {loginMessage && <div className='loginMessage' >{loginMessage}</div>}
    <div className='admin-login'>
      <label htmlFor="email2">Email</label>
      <input
        id="email2"
        name="email2"
        type='email'
        value={email2}
        onChange={(e) => setEmail2(e.target.value)}
      />
      <label htmlFor="password2">Password</label>
      <input
        id="password2"
        name="password2"
        type="password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <div className='admin-button'>
     <button type='submit'>Sign in</button>
     </div>
    </div>
    </form>
    <Divider />
    <form onSubmit={handleSubmit}>
    <div className='admin-text'>
    <h3>OR SIMPLY SIGNUP HERE</h3>
    </div>
    {feedBackMessage && <div className='feedBackMessage'>{feedBackMessage}</div>}
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
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor="zip">Zip Code</label>
      <input
        id="zip"
        name="zip"
        type='text'
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
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
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}

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

export default Admin

