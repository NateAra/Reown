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
          name={"price"}
          placeholder={"Price"}
          icon={"currency-usd"}
          maxLength={8}
          keyboardType="numeric"
        />
        <AppFormPicker
          items={category}
          name={"Category"}
          // icon={"view-grid"}
          placeholder={"Category"}
        />
        <AppFormField
          maxLength={255}
          multiline={true}
          name={"description"}
          icon={"script-text"}
          placeholder={"Description"}
          numberOfLine={3}
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
});

export default ListingEditScreen;
