import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import '../../style/index.css';
import { Divider } from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../Footer';



function Checkout() {

const cartShoes = useSelector((state) => state.cart.cartItems);

const total = cartShoes.reduce((acc, item) => acc + item.price * item.qty, 0);
const qty = cartShoes.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
    <Navbar />
    <main>
    <h2>Checkout</h2>
   <div className='checkout-recap'>
   {cartShoes.map((item) => (
          <div key={item.id} className='shoe-cart'>
            <img src={item.imgURL} alt={item.title} />
            <p>{item.price}</p>
           </div>
           ))}
           <p>{qty}</p>
           <h4>{total}</h4>
   </div>
    <section className='admin-login'>
        <p>Already have an account? Sign in</p>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
    </section>
    <Divider />
  
    <section className='admin-login'>
    <p>Shippping details</p>
       <input type='text' placeholder='Name' />
       <input type='text' placeholder='Surname' />
       <input type='text' placeholder='address' />
       <input type='text' placeholder='cap' />
       <input type='text' placeholder='city' />
       <input type='email' placeholder='Email' />
      
        <button>buy</button>
      
    </section>
    </main>
    <Footer />
    </>
  )
}

export default Checkout
