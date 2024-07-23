import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import myTheme from "./navigationTheme";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: myTheme.header.backgroundColor,
      },
      headerTintColor: myTheme.header.headerTintColor,
      presentation: "modal",
    }}
  >
    <Stack.Screen name="Listing" component={ListingScreen} options={{ headerShown: false}} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default FeedNavigator;
