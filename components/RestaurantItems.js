import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurantItem, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => {
              navigation.navigate("RestaurantDetailScreen", {
                name: restaurantItem.name,
                imagUrl: restaurantItem.image_url,
                price: restaurantItem.price,
                reviews: restaurantItem.review_count,
                rating: restaurantItem.rating,
                categories: restaurantItem.categories,
              });
            }}
            style={{ marginBottom: 30 }}
          >
            <View style={styles.cardContainer}>
              <RestaurantImage image_url={restaurantItem.image_url} />
              <RestaurantInfo
                title={restaurantItem.name}
                rating={restaurantItem.rating}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}

const RestaurantImage = props => {
  return (
    <View>
      <Image
        source={{ uri: props.image_url }}
        style={{ width: "100%", height: 210 }}
      />
      <TouchableOpacity onPress={() => {}} style={styles.heatIcon}>
        <MaterialCommunityIcons
          name={"heart-outline"}
          size={25}
          color={"white"}
        />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = props => {
  return (
    <View style={styles.details}>
      <View>
        <Text style={styles.nameMeal}>{props.title}</Text>
        <Text style={styles.timeMeal}>30m - 45m</Text>
      </View>
      <View style={styles.rateMeal}>
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // height: 250,
    marginVertical: 8,
    borderRadius: 10,

    padding: 10,
    backgroundColor: "white",
    overflow: "hidden",
  },
  details: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  nameMeal: {
    fontSize: 15,
    fontWeight: "bold",
  },
  timeMeal: {
    fontSize: 13,
    color: "gray",
  },
  rateMeal: {
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  heatIcon: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 3,
    borderRadius: 30,
    position: "absolute",
    right: 20,
    top: 20,
  },
});

export default RestaurantItems;
