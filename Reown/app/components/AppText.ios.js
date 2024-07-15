import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    fontSize: 20,
    fontFamily: "Courier"
  },
});

export default AppText;