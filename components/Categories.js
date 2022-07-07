import react from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const itemsCategories = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

function Categories(props) {
  return (
    <View style={styles.viewContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {itemsCategories.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Image source={item.image} style={styles.images} />
              <Text style={styles.title}> {item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 13,
    fontWeight: "900",
  },
  itemContainer: {
    alignItems: "center",
    marginRight: 30,
  },
  viewContainer: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 20,
  },
});

export default Categories;
