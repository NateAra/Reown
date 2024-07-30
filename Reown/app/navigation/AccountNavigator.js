import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import myTheme from "./NavTheme";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: myTheme.header.backgroundColor,
      },
      headerTintColor: myTheme.header.headerTintColor,
    }}
  >
    <Stack.Screen name="Acc" component={AccountScreen} options={{ headerShown: false}} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
