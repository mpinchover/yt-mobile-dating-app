import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HORIZONTAL_PADDING_1, VERTICAL_PADDING_1 } from "../constants";

const DATA = [
  {
    uuid: "some-uuid-1",
    title: "How to eat sushi",
  },
  {
    uuid: "some-uuid-2",
    title: "Pizza in NYC ranked",
  },
];
const SelectedMediaLinks = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.linkContainer}>
        <Text style={styles.mediaLink}>{item.title}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="ios-remove" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.uuid}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeperator}></View>;
        }}
      />
    </View>
  );
};

export default SelectedMediaLinks;

const styles = StyleSheet.create({
  container: {
    // marginTop: VERTICAL_PADDING_1,
    paddingHorizontal: HORIZONTAL_PADDING_1,
  },
  linkContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
  },
  mediaLink: {
    fontSize: 16,
    color: "blue",
    // padding: 10,
    flex: 1,
  },
  itemSeperator: {
    backgroundColor: "lightgrey",
    height: 1,
    width: "100%",
  },
});
