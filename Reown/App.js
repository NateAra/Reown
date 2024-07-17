import { useState } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LoginScreen from "./app/screens/LoginScreen";
import AppButton from "./app/components/AppButton";
import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}

