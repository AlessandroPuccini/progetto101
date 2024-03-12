import React from 'react' 
import IMAGES from '../images/Images';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, getTotals } from '../redux/cartSlice';
import Divider from '@mui/material/Divider';
import '../style/temporaryDrawer.css';
import '../style/index.css';


function Cart() {

const cartShoes = useSelector((state) => state.cart.cartItems);
const dispatch = useDispatch();

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   fetch('/api/cart')
//     .then(response => response.json())
//     .then(data => setProducts(data));
// }, []);

const total = cartShoes.reduce((acc, item) => acc + item.price * item.qty, 0);
const qty = cartShoes.reduce((acc, item) => acc + item.qty, 0);

const hadleClick = (e) => {
    e.preventDefault();
  window.location.href = '/checkout';

}

    return (
   <section className='cart'>
    <div className='title'>
        <h3> Your Cart</h3>
    </div>
        <Divider />
        <div id='product'>
         {/* {products.map((product) => (
          <div key={product.id}>
            <img src={product.imgURL} alt={product.title} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div> 
        ))} */}
        {cartShoes.map((item) => (
          <div key={item.id} className='shoe-cart'>
            <img src={item.imgURL} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.qty}</p> 
            <button onClick={() => dispatch(removeFromCart(item.id))}><img src={IMAGES.image10} alt='trash'/></button>
           </div>
           ))}
        </div>    
        <Divider />
        <p>Quantity: {qty}</p>
        <h4>Total: {total}€</h4>

        <Divider /> 
        <div className='checkout'>
            <button onClick={hadleClick}>Checkout</button>
        </div>
    </section>   
    
  )
}

export default Cart

