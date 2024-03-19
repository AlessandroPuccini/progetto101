import React,{useState} from 'react' 
import IMAGES from '../images/Images';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, getTotals } from '../redux/cartSlice';
import Divider from '@mui/material/Divider';
import '../style/temporaryDrawer.css';
import '../style/index.css';



function Cart() {

const cartShoes = useSelector((state) => state.cart.cartItems);
const dispatch = useDispatch();

const total = cartShoes.reduce((acc, item) => acc + item.price * item.qty, 0);
const qty = cartShoes.reduce((acc, item) => acc + item.qty, 0);

const hadleClick = (e) => {
    e.preventDefault();
    // alert('Thank you for your request, we will email you the details soon');
  window.location.href = '/progetto101/checkout';

}

    return (
   <section className='cart'>
    <div className='title'>
        <h3> Your Cart</h3>
    </div>
        <Divider />
        <div id='product'>
        {cartShoes.map((item) => (
          <div key={item.id} className='shoe-cart'>
            <img src={item.imgURL} alt={item.title} />
            <h2>{item.title}</h2>
            <p>€ {item.price}</p>
            <p>{item.qty}</p> 
            <button onClick={() => dispatch(removeFromCart(item.id))}><img src={IMAGES.image10} alt='trash'/></button>
           </div>
           ))}
        </div>    
        <Divider />
        <div className='cart-qty-tot'>
        <p>Quantity: {qty}</p>
        <h4>Total: {total}€</h4>
        </div>
        <Divider /> 
        {/* <div className='checkout'>
          <button onClick={hadleClick}>Checkout</button> 
        </div> */}
    </section>   
    
  )
}

export default Cart



{/* <button onClick={hadleClick}>Checkout</button> */}