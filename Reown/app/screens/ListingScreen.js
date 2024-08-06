import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingApi from "../api/listings";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import { ErrorMessage } from "../components/forms";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import ActiveIndicator from "../components/ActiveIndicator";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadListing = async () => {
    setLoading(true);
    const response = await listingApi.getListings();
    setLoading(false);

    if (!response.ok) {
      setError("Couldn't retrieve the listings.");
      return;
    }

    setError("");
    setListings(response.data);
  };

  useEffect(() => {
    loadListing();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <ErrorMessage error={error} visible={true} />
          <AppButton title="Retry" onPress={loadListing} />
        </>
      )}
      <ActiveIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default ListingScreen;
