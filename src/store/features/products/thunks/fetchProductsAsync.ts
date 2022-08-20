import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

import { Product } from "../@types";

import { findAllProducts } from "../../../../services/products";

import { STATUS } from "../initialState";

export const fetchProductsAsync = createAsyncThunk(
  'fetch/products',
  async () => {
    const response = await new Promise<{ data: any }>((resolve) =>
      setTimeout(() => resolve({ data: findAllProducts() }), 5000),
    )

    return response.data;
  }
);

export const fetchProductsAsyncBuilder = (
  builder: ActionReducerMapBuilder<{
    data: Product[],
    status: string
  }>
) => {
  builder
    .addCase(fetchProductsAsync.pending, (state, _) => {
      state.status = STATUS.LOADING;
    })
    .addCase(fetchProductsAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUS.IDLE;
    })
    .addCase(fetchProductsAsync.rejected, (state, _) => {
      state.status = STATUS.ERROR;
    })
}