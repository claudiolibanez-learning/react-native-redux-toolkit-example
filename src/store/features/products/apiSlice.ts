import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product } from '../../../types';

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      providesTags: ["products"]
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`
    }),
    addProduct: builder.mutation<Product, Product>({
      query: (user) => ({
        url: "/products",
        body: user,
        method: "POST"
      }),
      invalidatesTags: ["products"]
    }),
    updateProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: `/products/${product.id}`,
        body: product,
        method: "PATCH"
      }),
      invalidatesTags: ["products"]
    }),
    deleteProduct: builder.mutation<number, {}>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["products"]
    }),
  }),
});

export default productsApi;