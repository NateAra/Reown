import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText.ios";
import Icon from "./Icon";

function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={40} iconColor={colors.darkMoon} />}
      <AppText style={styles.text}>{placeholder}</AppText>
      <Icon name={"menu-down"} size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mercury,
    flexDirection: "row",
    borderRadius: 30,
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
