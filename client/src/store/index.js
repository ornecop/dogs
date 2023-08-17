import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducer/index.js'
import thunk from 'redux-thunk';

const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});
  
export default store;
