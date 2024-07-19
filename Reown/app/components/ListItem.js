import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import AppText from "./AppText.ios";
import Icon from "./Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.gray85} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons style={styles.icon} size={40} name="chevron-right" />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.darkMoonLight,
  },
  detailsContainer: {
    flex:1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 35,
  },
  title: {
    color: colors.mercury,
    fontWeight: 500,
  },
  subTitle: {
    color: colors.sunflower,
  },
  icon: {
    color: colors.gray85
  }
});

export default ListItem;
