import React, {useId} from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Divider from '@mui/material/Divider';
import '../../style/index.css';
import Input from '../Input';


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

  return (
    
     <>
    <Navbar />
    <form onSubmit={handleSubmit(handleFormSubmit)}>
    <div className='admin-text'>
        <h3> ALREADY HAVE AN ACCOUNT? SIGN IN</h3>
        </div>
     <Input id={idPrefix + '-email'}
     rules={{required: true, pattern: /^\S+@\S+$/i}}
     info='Email'
     reg={register}
     error={errors.email}
     />
     <Input id={idPrefix + '-password'}
     rules={{required: true, minLength: 8, maxLength: 20}}
     info='Password'
     type='password'
     reg={register}
     error={errors.password}
     />
     <div className='admin-button'>
     <button type='submit'>Sign in</button>
     </div>
    <Divider />
   <div className='admin-text'>
    <h3>OR SIMPLY SIGNUP HERE</h3>
    </div>
    <Input id={idPrefix + '-name'}
    rules={{required: true}} 
    info='Name'
    reg={register}
    error={errors.Name}
    errorMsg='Please enter your name'/>

    <Input id={idPrefix + '-surname'} 
    rules={{required: true}}
    info='Surname'
    reg={register}
    error={errors.Surname}
    errorMsg='Please enter your last name'/>

<Input id={idPrefix + '-address'} 
    rules={{required: true}}
    info='Address'
    reg={register}
    error={errors.Address} />

<Input id={idPrefix + '-city'} 
    rules={{required: true}}
    info='City'
    reg={register}
    error={errors.City} />

<Input id={idPrefix + '-zip'}
    rules={{required: true, pattern: /^\d{5}$/}}
    info='Zip code'
    reg={register}
    error={errors.Zip}
    errorMsg='Please enter a valid zip code' />

<Input id={idPrefix + '-email'}
     rules={{required: true, pattern: /^\S+@\S+$/i}}
     info='Email'
     reg={register}
     error={errors.email}
     errorMsg='Use a valid email address' 
     />
  <Input id={idPrefix + '-password'}
     rules={{required: true, minLength: 8, maxLength: 20}}
     info='Password'
     type='password'
     reg={register}
     error={errors.password}
     errorMsg='Your password should be at least 8 characters long' 
     />
  <Input id={idPrefix + '-confirmPassword'}
     rules={{required: true, minLength: 8, maxLength: 20}}
     info='PasswordCheck'
     type='password'
     reg={register}
     error={errors.PasswordCheck}
     
     />

    <div className='admin-button'>
     <button type='submit'>Sign up</button>
    </div>
    </form>
    <Footer />

    </>
   
  )
}

export default Admin
