import { useState } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LoginScreen from "./app/screens/LoginScreen";
import AppButton from "./app/components/AppButton";
import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <MessagesScreen /> */}
    </GestureHandlerRootView>
  );
}

