import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const About = props => {
  const { name, imagUrl, price, reviews, rating, categories } =
    props.about.params;

  const formatCategories = categories
    .map(cat => {
      return cat.title;
    })
    .join(" • ");
  const description = `${formatCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating}⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={imagUrl} />

      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

function RestaurantImage(props) {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
  );
}

function RestaurantName(props) {
  return <Text style={styles.headTitle}>{props.name}</Text>;
}

function RestaurantDescription(props) {
  return <Text style={styles.description}>{props.description}</Text>;
}

const styles = StyleSheet.create({
  headTitle: {
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    marginTop: 5,
    paddingBottom: 3,
    marginHorizontal: 15,
    fontSize: 15.5,
    fontWeight: "400",
  },
});

export default About;
