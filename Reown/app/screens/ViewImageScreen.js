import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name={"window-close"} color={"white"} size={35}/>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name={"trash-can-outline"} color={"red"} size={35}/>
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.jetBlack,
    flex: 1,
  },
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.sunflower,
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.mercury,
    position: "absolute",
    top: 50,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
