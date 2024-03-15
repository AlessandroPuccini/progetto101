import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Divider } from '@mui/material';
import '../../style/index.css';

function Admin2() {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
        name: '',
        surname: '',
        address: '',
        city: '',
        zip: '',
        email2: '',
        password2: '',
        passwordCheck: ''
      });
    
      const handleInputChange = (e) => {
        setInputValues({
          ...inputValues,
          [e.target.name]: e.target.value
        });
      };

const saveData = async () => {
    try{
      await axios.post('http://localhost:3001/writetodatabase', {content: inputValue});
        console.log("Data:",inputValue );
        alert("Data saved:", inputValue);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

const [serverData, setServerData] = useState("");

useEffect(() => {
    const fetchData = async () => {
       try{
          const response = await axios.get('http://localhost:3001/readfromserver');
            const dataFromServer = response.data.message;
            setServerData(dataFromServer);
            
       } catch (error) {
        console.error("Error fetching data:", error);
       }
    };

    fetchData();
}, []);


const handleClick = () => {
   if(serverData === inputValues.email && serverData === inputValues.password){
         alert('You are logged in');
    }else {
        alert('You need to sign up first')
    }
}

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
        value={inputValues.email}
        onChange={handleInputChange}
      />
      <label htmlFor="password">Password</label>
      <input 
        id="password"
        name="password"
        type="password"
        value={inputValues.password}
        onChange={handleInputChange}
      />
      <div className='admin-button'>
     <button onClick={handleClick} type='submit'>Sign in</button>
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
        value={inputValues.name}
        onChange={handleInputChange}
      />

      <label htmlFor="surname">Surname</label>
      <input 
        id="surname"
        name="surname"
        value={inputValues.surname}
        onChange={handleInputChange}
      />
      <label htmlFor="address">Address</label>
      <input 
        id="address"
        name="address"
        value={inputValues.address}
        onChange={handleInputChange}
      />
      <label htmlFor="city">City</label>
      <input 
        id="city"
        name="city"
        value={inputValues.city}
        onChange={handleInputChange}
      />
      <label htmlFor="zip">Zip Code</label>
      <input 
        id="zip"
        name="zip"
        value={inputValues.zip}
        onChange={handleInputChange}
      />
      <label htmlFor="email2">Email</label>
      <input 
        id="email2"
        name="email2"
        type='email'
        value={inputValues.email2}
        onChange={handleInputChange}
      />
      <label htmlFor="password2">Password</label>
      <input 
        id="password2"
        name="password2"
        type='password'
        value={inputValues.password2}
        onChange={handleInputChange}
      />

      <label htmlFor="passwordCheck">Password Check</label>
      <input 
        id="passwordCheck"
        name="passwordCheck"
        type="password"
        value={inputValues.passwordCheck}
        onChange={handleInputChange}
      />

      <div className='admin-button'>
     <button onClick={saveData} type='submit'>Sign up</button>
    </div>

    </div>
     </form>
    <Footer />
    </>
  )
}

export default Admin2


