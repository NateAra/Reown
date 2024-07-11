import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg-cart.jpg")}
      resizeMode="cover"
    >
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
      <Image style={styles.logo} source={require("../assets/reown-logo.png")} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#ecb939",
  },
  logo: {
    width: "100%",
    height: 100,
    position: "absolute",
    top: 70,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#292929",
  },
});

export default WelcomeScreen;
