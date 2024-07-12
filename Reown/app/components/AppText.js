import { Platform, StyleSheet, Text } from 'react-native';

function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Courier"
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      }
    })
  },
});

export default AppText;