import React from "react";
import { ListRenderItem } from "react-native";

import * as S from './styles';

import { Product } from "../../types";

import { ProductItem } from '../ProductItem';

interface ProductsListProps {
  data: Product[];
}

export const ProductsList = ({
  data
}: ProductsListProps) => {
  const keyExtractor = (
    _: Product,
    index: number,
  ): string => {
    return String(index);
  };

  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return <ProductItem item={item} />;
  };

  return <S.List
    data={data}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
  />
}