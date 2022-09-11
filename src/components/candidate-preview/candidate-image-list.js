import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzlhErMN-N0llPPEXvirEi1NY1XFpmiR8cw&usqp=CAU",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    image:
      "https://www.elitesingles.com/wp-content/uploads/sites/85/2020/06/2b_en_ta_teaser_sp1-350x264.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dfb51321047cf33eb90b6df/1581602814946-NLSD2Y3725ASHPBDEFQ2/Nick-MyHeartSkipped-1948.jpg",
  },
];
const Item = ({ image }) => (
  <Image
    resizeMode="contain"
    style={styles.image}
    source={{ uri: image }}
  ></Image>
);

const CandidateImageList = () => {
  const renderItem = ({ item }) => <Item image={item.image} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.75,
    // flex: 1,
    // height: 1,
    // width: 1,
  },
});

export default CandidateImageList;
