import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from "./counterSlice";
import {shoesReducer} from "./shoesSlice";
import {cartReducer} from "./cartSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        counter: counterReducer,
        shoes: shoesReducer,
    },
});

