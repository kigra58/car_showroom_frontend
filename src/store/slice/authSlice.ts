import { createSlice } from "@reduxjs/toolkit";

const initialState={
  id:0,
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  token:""
};

const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    authHandler(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { authHandler } = authSlice.actions;
export default authSlice;
