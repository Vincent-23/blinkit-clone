import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer";
import CartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    // cart: cartReducer,
    cart: CartSlice,
  },
});
