import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import Space from "./Space";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

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

const MenuItem = ({ restaurantName }) => {
  const dispatch = useDispatch();

  // this dispatch in function selectItem make me some problem need to check it
  //  later so this useDispatch is set request to put info in the redux
  const selectItem = (item, checkBoxValue) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkBoxValue: checkBoxValue,
      },
    });
  };

  const cartItems = useSelector(state => {
    return state.cartReducer.selectedItems.items;
  });

  const isFoodInCart = (meal, cartItems) => {
    return Boolean(cartItems.find(item => item.item.title === meal.title));
  };
  function handelFood(meal, index) {
    return (
      <View>
        <View style={styles.mainContainer}>
          <View style={styles.checkBoxContainer}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
              fillColor={"green"}
              onPress={checkBoxValue => selectItem(meal, checkBoxValue)}
              isChecked={isFoodInCart(meal.item, cartItems)}
            />
          </View>
          <FoodInfo food={meal.item} />
          <FoodImage food={meal.item} />
        </View>
        <Space style={{ backgroundColor: "#eee", height: 1 }} />
      </View>
    );
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={food}
      renderItem={handelFood}
    />
  );
};

const FoodInfo = props => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.mainTitle}>{props.food.title}</Text>
      <View style={{ paddingLeft: 5 }}>
        <Text>{props.food.description}</Text>
        <Text>price :{props.food.price}</Text>
      </View>
    </View>
  );
};

const FoodImage = props => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: props.food.imageUrl }} />
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ffff",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 2,
  },
  infoContainer: {
    flex: 2,
    justifyContent: "space-evenly",
    padding: 5,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "white",
  },
  imageContainer: {
    padding: 5,
    overflow: "hidden",
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: "800",
  },
  checkBoxContainer: {
    paddingLeft: 15,
    justifyContent: "center",
  },
});
