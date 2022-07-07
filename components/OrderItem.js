import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const { title, price } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
    opacity: 0.8,
  },
});

export default OrderItem;
