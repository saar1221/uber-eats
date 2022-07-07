import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Space = props => {
  return <View style={{ ...styles.container, ...props.style }}></View>;
};

export default Space;

const styles = StyleSheet.create({
  container: {
    padding: 1,
    width: "100%",
    height: 1,
    backgroundColor: "#B4B4B4",
  },
});
