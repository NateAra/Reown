import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText.ios";
import Icon from "./Icon";
import { useState } from "react";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({ icon, placeholder, items, selectedItem, onSelectItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <Icon name={icon} size={40} iconColor={colors.darkMoon} />}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <Icon name={"menu-down"} size={40} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType={"slide"}>
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mercury,
    flexDirection: "row",
    borderRadius: 30,
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: colors.placeholder,
  },
});

export default AppPicker;
