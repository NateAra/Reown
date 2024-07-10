import { useState } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <Button title="Click Me" onPress={onPress} />
      <Text>{count || null}</Text>
      <Button title="Simple Alert" onPress={() => alert("Button Tapped")} />
      <Button
        title="Advance Alert"
        onPress={() =>
          Alert.prompt("Title", "Message", (text) => console.log(text))
        }
      />
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
