import { configureStore } from '@reduxjs/toolkit';
import productsApi from './features/products/apiSlice';

import { productsReducer } from './features/products/slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware),
});

export { store };