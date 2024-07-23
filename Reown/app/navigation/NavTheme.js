import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.mercury,
    background: colors.darkMoon,
  },
  header: {
    backgroundColor: colors.darkMoonLight,
    headerTintColor: colors.mercury,
  },
};

export default myTheme;
