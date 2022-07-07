import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function HeaderTabs(props) {
  return (
    <View style={styles.headContainer}>
      <HeaderButton
        btnTitle={"Delivery"}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        btnTitle={"PickUp"}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

function HeaderButton(props) {
  return (
    <TouchableOpacity
      style={{
        ...styles.btnToggle,
        backgroundColor: props.activeTab === props.btnTitle ? "black" : "white",
      }}
      onPress={() => {
        props.setActiveTab(props.btnTitle);
      }}
    >
      <Text
        style={{
          color: props.activeTab === props.btnTitle ? "white" : "black",
          ...styles.btnTitle,
        }}
      >
        {props.btnTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  btnToggle: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 30,
  },
  btnTitle: {
    fontSize: 14,
    fontWeight: "900",
  },
});

export default HeaderTabs;
