import { Text } from "react-native";
import defaultStyles from "../config/defaultStyles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text {...otherProps} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
}

export default AppText;
