import { Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/bg-cart.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/reown-logo.png")} />
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} onPress={() => navigation.navigate("Login")} />
        <AppButton title={"Register"} color="mercury" onPress={() => navigation.navigate("Register")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 200,
    position: "absolute",
    top: 70,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
