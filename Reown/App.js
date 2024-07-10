import { SafeAreaView, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={viewStyle}></View>
    </SafeAreaView>
  );
}

const viewStyle = {
  backgroundColor: "dodgerblue",
  width: 150,
  height: 70,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
