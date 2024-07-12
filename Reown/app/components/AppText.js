import { Platform, StyleSheet, Text } from 'react-native';

function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Courier" : "Avenir",
  },
});

export default AppText;