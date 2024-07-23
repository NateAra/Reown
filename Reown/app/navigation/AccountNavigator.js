import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import myTheme from "./navigationTheme";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: myTheme.header.backgroundColor,
    //   },
    //   headerTintColor: myTheme.header.headerTintColor,
    //   presentation: "modal",
    // }}
  >
    <Stack.Screen name="User" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
