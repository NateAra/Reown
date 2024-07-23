import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.mercury}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkMoonLight,
    borderColor: colors.sunflower,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewListingButton;
