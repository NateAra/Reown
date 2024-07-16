import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText.ios";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image resizeMode="stretch" style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.darkMoonLight,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.sunflower,
    fontWeight: "bold",
  },
});

export default Card;
