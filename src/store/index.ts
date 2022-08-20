import { configureStore } from '@reduxjs/toolkit';

import { productsReducer } from './features/products/slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  }
});

export { store };