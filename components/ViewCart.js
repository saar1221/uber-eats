import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../firebase";
import LottieView from "lottie-react-native";

const ViewCart = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { items, restaurantName } = useSelector(
    state => state.cartReducer.selectedItems
  );
  const total = items
    .map(item => {
      return Number(item.item.price.replace("$", ""));
    })
    .reduce((prev, curr) => prev + curr, 0);

  const totalUsd = `$${Math.round((total + Number.EPSILON) * 100) / 100}`;

  const addOrderToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();

    const dataStructure = items.map((item, index) => {
      return item.item;
    });

    db.collection("orders")
      .add({
        items: dataStructure,
        restaurantName: restaurantName,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("Document successfully written!");
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("OrderCompletedScreen");
        }, 2000);
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => {
              return <OrderItem key={index} item={item.item} />;
            })}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>subtotal</Text>
              <Text>{totalUsd}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.checkoutBtn}
                onPress={() => {
                  addOrderToFireBase();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.btnContainer}>
          <View style={styles.cartContainer}>
            <TouchableOpacity
              style={styles.touchContainer}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.text}>View Cart</Text>
              <View style={styles.textTotal}>
                <Text style={styles.text}>{totalUsd}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../assets/animations/scanner.json")}
            autoPlay={true}
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 30,

    zIndex: 999,
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  touchContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 30,
    width: "70%",
    position: "relative",
  },

  text: {
    color: "white",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: "50%",
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 18,
    marginBottom: 5,
  },
  subTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subTotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
  checkoutBtn: {
    backgroundColor: "black",
    width: "70%",
    padding: 13,
    margin: 5,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});

export default ViewCart;
