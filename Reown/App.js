import { View, StyleSheet, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View style={styles.container}>
      <AppText>React Native</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
