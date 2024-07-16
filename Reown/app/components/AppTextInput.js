import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import Icon from "./Icon";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={40} iconColor={colors.sunflower} />}
      <TextInput style={defaultStyles.text} {...otherProps} />
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
  },
});

export default AppTextInput;
