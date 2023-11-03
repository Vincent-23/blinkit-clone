import { createSlice } from "@reduxjs/toolkit";
import map from "lodash/map";

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addQuantity: (state, action) => {
      if (state.value.find((e) => e.id === action.payload.id))
        state.value = map(state.value, (e) =>
          e.id === action.payload.id ? { ...e, quantity: e.quantity + 1 } : e
        );
      else state.value = [...state.value, { ...action.payload, quantity: 1 }];
    },
    removeQuantity: (state, action) => {
      if (
        state.value.find((e) => e.id === action.payload.id && e.quantity === 1)
      )
        state.value = state.value.filter((e) => e.id !== action.payload.id);
      else
        state.value = map(state.value, (e) =>
          e.id === action.payload.id ? { ...e, quantity: e.quantity - 1 } : e
        );
    },
  },
});

export const { addCart, addQuantity, removeQuantity, removeCart, updateCart } =
  cartSlice.actions;
export default cartSlice.reducer;
