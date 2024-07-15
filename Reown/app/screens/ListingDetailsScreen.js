import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText.ios";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        resizeMode="strach"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Chair for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/nate.jpg")}
            title={"Nate Arafayne"}
            subTitle={"3 Listing"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "auto",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: colors.darkMoon,
    fontSize: 25,
    fontWeight: 500,
  },
  price: {
    color: colors.sunflower,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
