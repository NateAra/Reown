import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText.ios";
import colors from "../config/colors";

function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    color: colors.jetBlack,
    fontWeight: 500,
  },
  subTitle: {
    color: colors.gray85,
  },
});

export default ListItem;
