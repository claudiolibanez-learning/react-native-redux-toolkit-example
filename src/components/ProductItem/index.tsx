import React from "react";

import { Product } from "../../types";

import * as S from './styles';

interface ProductItemProps {
  item: Product;
}

export const ProductItem = ({
  item
}: ProductItemProps) => {
  return (
    <S.Container>
      <S.Title>{item.name}</S.Title>
    </S.Container>
  );
}