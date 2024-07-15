import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../config/colors";

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.jetBlack
  },
});

export default Screen;
