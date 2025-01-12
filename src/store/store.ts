import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/productService";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { cartApi } from "../services/cartService";
import { authApi } from "../services/authService";
import { cateogoryApi } from "../services/categoryService";
import { orderApi } from "../services/orderService";
import { paymentApi } from "../services/paymentService";
import { userApi } from "../services/userService";
import { persistReducer } from 'redux-persist';
import priceSlice from "./slice/priceCalculation";
import authSlice from "./slice/authSlice";
import storage from 'redux-persist/lib/storage';  
// import storageSession from 'redux-persist/lib/storage/session'

// Combine all reducers into a single rootReducer
export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [paymentApi.reducerPath]: paymentApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [cateogoryApi.reducerPath]: cateogoryApi.reducer,
  [priceSlice.name] : priceSlice.reducer,
  [authSlice.name] : authSlice.reducer,
});

// export const store = configureStore({
//   reducer: rootReducer,

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .concat(authApi.middleware)
//       .concat(userApi.middleware)
//       .concat(productApi.middleware)
//       .concat(cartApi.middleware)
//       .concat(cateogoryApi.middleware)
//       .concat(orderApi.middleware)
//       .concat(paymentApi.middleware)
// });

const persistConfig = {
  key: 'root', 
  storage
  // whitelist: ['auth'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck:false,
  })
  .concat(authApi.middleware)
  .concat(userApi.middleware)
  .concat(productApi.middleware)
  .concat(cartApi.middleware)
  .concat(cateogoryApi.middleware)
  .concat(orderApi.middleware)
  .concat(paymentApi.middleware)
});


setupListeners(store.dispatch);