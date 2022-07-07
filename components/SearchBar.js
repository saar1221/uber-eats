import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

function SearchBar(props) {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        query={{ key:   "YOUR-API-KEY-AND-INFO" }}
        onPress={(data, ditale = null) => {
          const city = data.description.split(",")[0];
          props.cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: { ...styles.textInput },
          textInputContainer: { ...styles.textInputContainer },
        }}
        renderLeftButton={() => {
          return (
            <View style={{ marginLeft: 10 }}>
              <Ionicons name={"location-sharp"} size={24} color={"black"} />
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View style={styles.search}>
              <AntDesign
                name={"clockcircle"}
                size={12}
                color={"black"}
                style={{ marginRight: 6 }}
              />
              <Text>Search</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 10,
    flexDirection: "row",
  },

  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    margin: 5,
  },

  textInput: {
    backgroundColor: "#eee",
    borderRadius: 20,
    marginTop: 7,
    fontWeight: "700",
  },

  predefinedPlacesDescription: {
    color: "#1faadb",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginRight: 9,
    padding: 9,
    borderRadius: 30,
  },
});

export default SearchBar;
