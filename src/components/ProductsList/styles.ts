import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

import { Product } from "../../types";

export const List = styled(
  FlatList as new (props: FlatListProps<Product>) => FlatList<Product>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;