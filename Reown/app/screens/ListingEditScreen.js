import { StyleSheet } from "react-native";
import * as y from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms/index";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

const validationSchema = y.object().shape({
  title: y.string().required().min(1).label("Title"),
  price: y.number().required().min(1).max(10000).label("Price"),
  description: y.string().label("Description"),
  category: y.object().required().nullable().label("Category"),
  images: y.array().min(1, "Please select at least one image."),
});

const category = [
  { label: "Books", value: 1, backgroundColor: "white", icon: "bookshelf" },
  { label: "Sports", value: 2, backgroundColor: "white", icon: "basketball" },
  {
    label: "Games",
    value: 3,
    backgroundColor: "white",
    icon: "gamepad-square",
  },
  { label: "Clothing", value: 4, backgroundColor: "white", icon: "shoe-heel" },
  { label: "Furniture", value: 5, backgroundColor: "white", icon: "lamps" },
  {
    label: "Other",
    value: 6,
    backgroundColor: "white",
    icon: "treasure-chest",
  },
];

function ListingEditScreen() { 

  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name={"images"} />
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
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
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
  },
});

export default ListingEditScreen;
