import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText.ios";

function ListItem({ image, title, subTitle, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={colors.gray85}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    color: colors.jetBlack,
    fontWeight: 500,
  },
  subTitle: {
    color: colors.gray85,
  },
});

export default ListItem;
