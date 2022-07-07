import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function BottomTabs(props) {
  return (
    <View style={styles.tabsContainer}>
      <IconsTabs iconName={"home"} title={"Home"} />
      <IconsTabs iconName={"search"} title={"Browse"} />
      <IconsTabs iconName={"shopping-bag"} title={"Grocery"} />
      <IconsTabs iconName={"receipt"} title={"Orders"} />
      <IconsTabs iconName={"user"} title={"Acounts"} />
    </View>
  );
}

function IconsTabs(props) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.tabs}>
        <FontAwesome5 name={props.iconName} size={25} color={"black"} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",

    backgroundColor: "#eeee",
  },
  tabs: { alignItems: "center" },
  title: {
    fontSize: 13,
    fontWeight: "700",
  },
});

export default BottomTabs;
