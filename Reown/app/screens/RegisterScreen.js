import { StyleSheet } from "react-native";
import * as y from "yup";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = y.object().shape({
  name: y.string().required().label("Name"),
  email: y.string().required().email().label("Email"),
  password: y.string().required().min(5).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"name"}
          placeholder={"Name"}
          icon={"account"}
          autoCorrect={false}
        />
        <AppFormField
          name={"email"}
          placeholder={"Email"}
          icon={"email"}
          textContentType={"emailAddress"}
          keyboardType={"email-address"}
          autoCorrect={false}
          autoCapitalize={"none"}
        />
        <AppFormField
          name={"password"}
          placeholder={"Password"}
          icon={"lock"}
          textContentType={"password"}
          autoCorrect={false}
          autoCapitalize={"none"}
          secureTextEntry={true}
        />
        <SubmitButton title={"Register"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 25,
  },
});

export default RegisterScreen;
