import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import Icon from "./Icon";

function AppTextInput({ icon, width = "100%", style, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <Icon name={icon} size={40} iconColor={colors.sunflower} />}
      <TextInput style={[defaultStyles.text, style]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mercury,
    flexDirection: "row",
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
  },
});

export default AppTextInput;
