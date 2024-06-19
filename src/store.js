import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feautres/user/userSlice';
import cartReducer from './feautres/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
