import { Formik, useFormik } from "formik";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppText from "../components/AppText.ios";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => console.log(values),
    validationSchema,
  });

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/reown-logo.png")} style={styles.logo} />
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        icon={"email"}
        keyboardType={"email-address"}
        onChangeText={formik.handleChange("email")}
        placeholder={"Email"}
        textContentType={"emailAddress"}
        value={formik.values.email}
      />
      {formik.errors.email && (
        <AppText style={styles.error}>{formik.errors.email}</AppText>
      )}
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        icon={"lock"}
        placeholder={"Password"}
        onChangeText={formik.handleChange("password")}
        textContentType={"emailAddress"}
        secureTextEntry={true}
        value={formik.values.password}
      />
      {formik.errors.password && (
        <AppText style={styles.error}>{formik.errors.password}</AppText>
      )}
      <AppButton title={"Login"} onPress={formik.handleSubmit} />
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
  error: {
    color: "red"
  }
});

export default LoginScreen;
