import { StyleSheet, View } from "react-native";
import React from "react";
import About from "../components/About";
import Space from "../components/Space";
import MenuItem from "../components/MenuItem";
import ViewCart from "../components/ViewCart";

const food = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    imageUrl:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    imageUrl: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    imageUrl:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    imageUrl:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Lasasadgna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    imageUrl:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];

const RestaurantDetailScreen = ({ route, navigation }) => {
  return (
    <View style={styles.layout}>
      <About about={route} />
      <Space />
      <MenuItem restaurantName={route.params.name} food={food} />
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
