import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import colors from "./app/config/colors";
import AuthNavigator from "./app/navigation/AuthNavigator";
import myTheme from "./app/navigation/NavTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={myTheme}>
        <AppNavigator />
        {/* <AuthNavigator /> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: colors.mercury,
  },
});
