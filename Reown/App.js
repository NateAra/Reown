import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen from "./app/components/Screen";
import { Text, StyleSheet } from "react-native";
import colors from "./app/config/colors";

const Tweets = () => (
  <Screen style={styles.backgroundColor}>
    <Text>Tweets</Text>
  </Screen>
);

const TweetDetails = () => (
  <Screen style={styles.backgroundColor}>
    <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: colors.mercury
  }
})