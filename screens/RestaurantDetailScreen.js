import { StyleSheet, View } from "react-native";
import React from "react";
import About from "../components/About";
import Space from "../components/Space";
import MenuItem from "../components/MenuItem";
import ViewCart from "../components/ViewCart";

const RestaurantDetailScreen = ({ route, navigation }) => {
  return (
    <View style={styles.layout}>
      <About about={route} />
      <Space />
      <MenuItem restaurantName={route.params.name} />
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default RestaurantDetailScreen;
const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
