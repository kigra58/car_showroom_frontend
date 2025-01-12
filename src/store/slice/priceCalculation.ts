import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "updatePrice",
  initialState: {
    subTotal: 0,
    tax: 0,
    shipping: 0,
    discount: 0,
    grandTotal: 0,
  },
  reducers: {
    priceHandler(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { priceHandler } = priceSlice.actions;
export default priceSlice
