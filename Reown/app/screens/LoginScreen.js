import { useFormik } from "formik";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";

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
        onBlur={formik.handleBlur("email")}
        placeholder={"Email"}
        textContentType={"emailAddress"}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && <ErrorMessage error={formik.errors.email} />}
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        icon={"lock"}
        placeholder={"Password"}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        textContentType={"emailAddress"}
        secureTextEntry={true}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <ErrorMessage error={formik.errors.password} />
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
    color: "red",
  },
});

export default LoginScreen;
