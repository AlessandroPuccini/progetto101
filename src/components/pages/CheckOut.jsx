import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {clearCart} from '../../redux/cartSlice';
import '../../style/index.css';
import { Divider } from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../Footer';



function Checkout() {

const cartShoes = useSelector((state) => state.cart.cartItems);
const dispatch = useDispatch();
const total = cartShoes.reduce((acc, item) => acc + item.price * item.qty, 0);
const qty = cartShoes.reduce((acc, item) => acc + item.qty, 0);

const handleClick = (e) => {
  e.preventDefault();
  alert('Thank you! Your order has been placed. We have emailed your order confirmation, and will send you an update when your order has shipped.');
  dispatch(clearCart());
  // window.location.href = '/progetto101/catalog';
}


  return (
    <>
    <main>
      <div className='checkout-title'>
        <h3>Checkout</h3>
    </div>
   <div className='checkout-recap'>
   {cartShoes.map((item) => (
          <div key={item.id} className='shoe-cart'>
            <img src={item.imgURL} alt={item.title} />
            <p>€ {item.price}</p>
           </div>
           ))}
           <p>Quantity {qty}</p>
           <h4>TOTAL {total} €</h4>
   </div>
    <section className='checkout-login'>
        <p>Already have an account? Sign in</p>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
    </section>
    <Divider />
  
    <section className='checkout-login'>
    <p>Shippping details</p>
       <input type='text' placeholder='Name' />
       <input type='text' placeholder='Surname' />
       <input type='text' placeholder='address' />
       <input type='text' placeholder='cap' />
       <input type='text' placeholder='city' />
       <input type='email' placeholder='Email' />
      
        <button onClick={handleClick}>buy</button>
      
    </section>
    </main>
    </>
  )
}

export default Checkout
