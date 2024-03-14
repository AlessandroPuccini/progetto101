import React, {useId, useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Divider from '@mui/material/Divider';
import '../../style/index.css';
import Input from '../Input';
import Read from '../Read';


function Admin(errorMsg) {
  const idPrefix = useId();
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset } = useForm(); 

    const handleFormSubmit = (dati) => {
      reset();
      alert('Form submitted'); 
    };

    let [inputValue, setInputValue] = useState('');

    const saveData = async () => {
        try{
          await axios.post('http://localhost:3001/writetodatabase', {content: inputValue});
            console.log("Data:",inputValue );
            alert("Data saved:", inputValue);
    
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


  return (
    
     <>
    <Navbar />
    <form onSubmit={handleSubmit(handleFormSubmit)}>
    <div className='admin-text'>
        <h3> ALREADY HAVE AN ACCOUNT? SIGN IN</h3>
        </div>
     <Input id={idPrefix + '-email'}
     value={inputValue}
     onChange={e => setInputValue(e.target.value)}
     rules={{required: true, pattern: /^\S+@\S+$/i}}
     info='Email'
     reg={register}
     error={errors.email}
     errorMsg="Use a valid email address"
     />
     <Input id={idPrefix + '-password'}
     value={inputValue}
     onChange={e => setInputValue(e.target.value)}
     rules={{required: true, minLength: 8, maxLength: 20}}
     info='Password'
     type='password'
     reg={register}
     error={errors.password}
     errorMsg='Your password is incorrect'
     />
     <div className='admin-button'>
     <button type='submit'>Sign in</button>
     </div>
    <Divider />
   <div className='admin-text'>
    <h3>OR SIMPLY SIGNUP HERE</h3>
    </div>
    <Input id={idPrefix + '-name'}
       value={inputValue}
       onChange={e => setInputValue(e.target.value)}
    rules={{required: true}} 
    info='Name'
    reg={register}
    error={errors.Name}
    errorMsg='Please enter your name'/>

    <Input id={idPrefix + '-surname'} 
       value={inputValue}
       onChange={e => setInputValue(e.target.value)}
    rules={{required: true}}
    info='Surname'
    reg={register}
    error={errors.Surname}
    errorMsg='Please enter your last name'/>

<Input id={idPrefix + '-address'} 
   value={inputValue}
   onChange={e => setInputValue(e.target.value)}
    rules={{required: true}}
    info='Address'
    reg={register}
    error={errors.Address} />

<Input id={idPrefix + '-city'} 
   value={inputValue}
   onChange={e => setInputValue(e.target.value)}
    rules={{required: true}}
    info='City'
    reg={register}
    error={errors.City} />

<Input id={idPrefix + '-zip'}
   value={inputValue}
   onChange={e => setInputValue(e.target.value)}
    rules={{required: true, pattern: /^\d{5}$/}}
    info='Zip code'
    reg={register}
    error={errors.Zip}
    errorMsg='Please enter a valid zip code' />

<Input id={idPrefix + '-email'}
   value={inputValue}
   onChange={e => setInputValue(e.target.value)}
     rules={{required: true, pattern: /^\S+@\S+$/i}}
     info='Email'
     reg={register}
     error={errors.email}
     errorMsg='Use a valid email address' 
     />
  <Input id={idPrefix + '-password'}
     value={inputValue}
     onChange={e => setInputValue(e.target.value)}
     rules={{required: true, minLength: 8, maxLength: 20}}
     info='Password'
     type='password'
     reg={register}
     error={errors.password}
     errorMsg='Your password should be at least 8 characters long' 
     />
  <Input id={idPrefix + '-confirmPassword'}
     value={inputValue}
     onChange={e => setInputValue(e.target.value)}
     rules={{required: true, minLength: 8, maxLength: 20}}
     info='PasswordCheck'
     type='password'
     reg={register}
     error={errors.PasswordCheck}
     
     />

    <div className='admin-button'>
     <button onClick={saveData} type='submit'>Sign up</button>
    </div>
    </form>
    <Footer />

    </>
   
  )
}

export default Admin
