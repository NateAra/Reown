import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText.ios";
import colors from "../config/colors";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: colors.mercury
  },
});

export default PickerItem;
