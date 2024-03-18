import React,{useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Sizes from '../Sizes';
import { addToCart, removeFromCart, updateQuantity } from '../../redux/cartSlice';



function ShoeInfo() {

  const {shoeId} = useParams();
  const shoes = useSelector((state) => state.shoes.value.filter((shoe) => shoe.id == shoeId));


  const dispatch = useDispatch(); 


  const handleAddToCart = (e) => {
   
    let item = shoes[0];
    const serializableShoe = {
      id: item.id,
      title: item.title,
      price: item.price,
      imgURL: item.imgURL,
  };
    dispatch(addToCart(serializableShoe));
  };

 const handleRemoveFromCart = () => {
  dispatch(removeFromCart(item.id));
 };


  return (
    <>
      <Navbar/>
      <main>
      <section className='shoeInfo'>
        <div className='shoes'>
          <img src={shoes[0]?.imgURL} />
          <img src={shoes[0]?.cover} />
        </div>  
        <div className='shoeInfo-text'>
          <h1>{shoes[0]?.title}</h1>
          <p>€ {shoes[0]?.price}</p>
          <p>{shoes[0]?.description}</p>
          {/* <Sizes /> */}
          <button className='add-to-cart' onClick={handleAddToCart}>Add to Cart</button>
          </div>
          
      </section>
      </main>
      <Footer />
      </>
  )
}

export default ShoeInfo


