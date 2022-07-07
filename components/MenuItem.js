import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import Space from "./Space";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const MenuItem = ({ restaurantName, food, hideCheckbox, marginLeft }) => {
  const dispatch = useDispatch();

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
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
                fillColor={"green"}
                onPress={checkBoxValue => selectItem(meal, checkBoxValue)}
                isChecked={isFoodInCart(meal.item, cartItems)}
              />
            )}
          </View>
          <FoodInfo food={meal.item} />
          <FoodImage
            food={meal.item}
            marginLeft={marginLeft ? marginLeft : 0}
          />
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
