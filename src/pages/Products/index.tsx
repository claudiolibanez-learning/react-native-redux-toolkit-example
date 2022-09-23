import React from "react";
import productsApi from "../../store/features/products/apiSlice";

import * as S from './styles';

import { ProductsList } from '../../components';

export default function Products() {
  const { data, error, isError, isLoading } = productsApi.useGetProductsQuery();

  return (
    <S.Container>
      <S.Title>Produtos</S.Title>
      <ProductsList data={data || []} />
    </S.Container>
  )
}