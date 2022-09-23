import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Products from '../pages/Products';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Products" component={Products} />
    </Navigator>
  )
}