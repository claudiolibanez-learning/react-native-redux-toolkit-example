import React, { useEffect } from "react";
import { View, SafeAreaView, Text, ActivityIndicator } from 'react-native';

import { useReduxDispath, useReduxSelector } from "../../store/hooks";
import { productsSelector, fetchProductsAsync, STATUS } from '../../store/features/products';

export default function Home() {

  const dispatch = useReduxDispath();
  const products = useReduxSelector(productsSelector);

  useEffect(() => {
    const initalLoading = async () => {
      await dispatch(fetchProductsAsync());
    }

    initalLoading();
  }, []);

  if (products.status === STATUS.LOADING) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={'blue'} size='large' />
      </View>
    );
  }

  if (products.status === STATUS.ERROR) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Algo deu errado</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {products.data.map((item, index) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </SafeAreaView>
  );
}