import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";
import BottomTabs from "../components/BottomTabs";

const YELP_API_KEY =
  "fsRxvsjliLB3aDMoT1GIw7CfT0uw0Xn0r9xv35HA3ktW9Ex_lq-p84Hv_DMABbJ3mDj4ShkwUB_eZYUw3e_sN08DtwN2fA-zrQxV_2XLl6c_hZkQchqYLNb006zCYnYx";

function HomeScreen({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json => {
        return setRestaurantData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <View style={{ backgroundColor: "#eee", paddingTop: 25, flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </View>
  );
}

export default HomeScreen;
