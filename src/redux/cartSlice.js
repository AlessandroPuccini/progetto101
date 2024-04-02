import { createSlice } from '@reduxjs/toolkit';


 const initialState = {
  cartItems: [],
  cartTotalQUantity: 0,
  cartTotalAmount: 0,
 };


 export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

     const isExist = state.cartItems.find(cartItem => cartItem.id == action.payload.id); 

     if(isExist){
       isExist.sum += action.payload?.price
       isExist.qty += 1
      } else{
        state.cartItems.push({...action.payload, 
        sum: action.payload?.price,
        qty: 1, 
      })
    }
  },
    
 
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => 
        item.id !== action.payload)
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item && item.quantity > 0) {
        item.quantity -=1;
      } 
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
  },
  clearCart: (state) => {
    state.cartItems = [];
  },
}
});



export const { addToCart,removeFromCart, updateQuantity, increaseQuantity, decreaseQuantity, getTotals, clearCart} = cartSlice.actions;

export const cartReducer =  cartSlice.reducer;









