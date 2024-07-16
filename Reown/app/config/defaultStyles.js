import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    color: colors.darkMoonLight,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
  },
};
