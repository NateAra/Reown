import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bgCart.jpg")}
    >
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end"
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#ecb939",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#313131",
  },
});

export default WelcomeScreen;
