import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/reown-logo.png")} style={styles.logo} />
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        icon={"email"}
        keyboardType={"email-address"}
        onChangeText={(text) => setEmail(text)}
        placeholder={"Email"}
        textContentType={"emailAddress"}
      />
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        icon={"lock"}
        placeholder={"Password"}
        onChangeText={(text) => setPassword(text)}
        textContentType={"emailAddress"}
        secureTextEntry={true}
      />
      <AppButton title={"Login"} onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 480,
    height: 180,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 30,
  },
});

export default LoginScreen;
