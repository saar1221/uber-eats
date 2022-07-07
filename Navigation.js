import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompletedScreen from "./screens/OrderCompletedScreen";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerMode: "none",
    headerShow: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"HomeScreen"}
          screenOptions={screenOptions}
        >
          <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
          <Stack.Screen
            name={"RestaurantDetailScreen"}
            component={RestaurantDetailScreen}
          />
          <Stack.Screen
            name={"OrderCompletedScreen"}
            component={OrderCompletedScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
