import { View } from "react-native";

export default function App() {

  return (
    <View
      style={{
        backgroundColor: "#E1E1D5",
        flex: 1,
        flexDirection: "row", // horizontal
        justifyContent: "center", // main
        alignItems: "center" // secondary
      }}
    >
      <View
        style={{
          backgroundColor: "#0209C6",
          width: 100,
          height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: "#FFD700",
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "#D82349",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
