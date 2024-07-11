import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const orientation = useDeviceOrientation();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
}
