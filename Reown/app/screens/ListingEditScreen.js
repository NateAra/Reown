import { StyleSheet } from "react-native";
import * as y from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms/index";
import Screen from "../components/Screen";

const validationSchema = y.object().shape({
  title: y.string().required().min(1).label("Title"),
  price: y.number().required().min(1).max(10000).label("Price"),
  description: y.string().label("Description"),
  category: y.object().required().nullable().label("Category"),
});

const category = [
  { label: "Shoes", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Furniture", value: 3 },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"title"}
          placeholder={"Title"}
          icon={"format-title"}
          maxLength={255}
        />
        <AppFormField
          name={"description"}
          placeholder={"Description"}
          icon={"script-text"}
          maxLength={255}
          multiline={true}
          numberOfLine={3}
          style={styles.text}
        />
        <AppFormPicker
          name={"Category"}
          placeholder={"Category"}
          icon={"view-list"}
          items={category}
          width={"50%"}
        />
        <AppFormField
          name={"price"}
          placeholder={"Price"}
          icon={"currency-usd"}
          maxLength={8}
          width={130}
          keyboardType="numeric"
        />
        <SubmitButton title={"Post"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    alignSelf: "center",
  }
});

export default ListingEditScreen;
