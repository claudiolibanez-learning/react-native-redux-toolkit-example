import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

import { Product } from "../../../../types";

import { findAllProducts } from "../../../../services/products";

import { STATUS } from "../initialState";

export const fetchProductsAsync = createAsyncThunk(
  'fetch/products',
  async (_, thunkAPI) => {

    try {
      const data = await findAllProducts();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
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