import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [], count: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      // console.log("PRINTING PAYLOAD ----- ")
      console.log(action.payload);

      const temp = [...state?.value, action.payload];

      return {
        value: temp,
        count: state.count + 1,
      };
    },
    removeCart: (state, action) =>{
      const {id} = action.payload
      const temp = state.value.filter((ele) => ele.id !== id)
      return {
        value : temp
      }
    }
  },
});

export const { addCart ,removeCart} = cartSlice.actions;
export default cartSlice.reducer;
