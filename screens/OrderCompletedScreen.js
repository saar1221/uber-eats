import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

const OrderCompletedScreen = () => {
  const { items, restaurantName } = useSelector(
    state => state.cartReducer.selectedItems
  );
  const total = items
    .map(item => {
      return Number(item.item.price.replace("$", ""));
    })
    .reduce((prev, curr) => prev + curr, 0);

  const totalUsd = `$${Math.round((total + Number.EPSILON) * 100) / 100}`;
  return (
    <View style={{ backgroundColor: "white", paddingTop: 25, flex: 1 }}>
      <Text>
        OrderCompletedScreen {restaurantName} and {totalUsd}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default OrderCompletedScreen;
