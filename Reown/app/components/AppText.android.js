import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function AppText({ children, style }) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.mercury,
    fontSize: 20,
    fontFamily: "Roboto",
  },
});

export default AppText;
