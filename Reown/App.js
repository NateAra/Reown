import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <Button title="Click Me" onPress={onPress}/>
      <Text>{count || null}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
