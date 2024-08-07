import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[ styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.darkMoon,
  },
  view: {
    flex: 1,
    backgroundColor: colors.darkMoon,
  }
});

export default Screen;
