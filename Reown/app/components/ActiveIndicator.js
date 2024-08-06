import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

function ActiveIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.lottieView}
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lottieView: {
    width: 200,
    height: 200,
  },
});

export default ActiveIndicator;
