import {
  SafeAreaView,
  StyleSheet,
  View
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
