const listings = [
  {
    id: 201,
    title: "Nick Therma-fit Tech Fleece Jacket",
    images: [{ fileName: "jacket1" }],
    price: 100,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Luxurious Green Velvet Sofa",
    images: [{ fileName: "couch2" }],
    categoryId: 1,
    price: 1200,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Vintage Brown Leather Sofa (great condition) - delivery included",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [
      { fileName: "couch1" },
      { fileName: "couch2" },
      { fileName: "couch3" },
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Adidas Continental 80",
    images: [{ fileName: "shoes1" }],
    categoryId: 5,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Vintage Rangefinder Camera",
    images: [{ fileName: "camera1" }],
    price: 500,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Leica M6 Classic Rangefinder Camera",
    images: [{ fileName: "camera2" }],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Modern Navy Blue Sofa with Red Accent Pillows - Delivery available",
    description: "No rips no stains no odors",
    images: [{ fileName: "couch3" }],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Dallas Cowboys Moccasin slippers",
    images: [{ fileName: "shoes2" }],
    categoryId: 5,
    price: 50,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
