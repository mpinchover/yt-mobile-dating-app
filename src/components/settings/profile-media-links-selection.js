import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { HORIZONTAL_PADDING_1, VERTICAL_PADDING_1 } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const MediaSelection = (props) => {
  const { mediaType, title, link } = props;
  return (
    <View>
      <View></View>
      <Text></Text>
    </View>
  );
};

const MediaLinksSelection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a YouTube video link"
        />
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="ios-add" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MediaLinksSelection;

const styles = StyleSheet.create({
  container: {
    paddingTop: VERTICAL_PADDING_1,
    paddingHorizontal: HORIZONTAL_PADDING_1,
  },
  textInputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
  },
  textInput: {
    fontSize: 16,

    // padding: 10,
    flex: 1,
  },
  addButton: {},
});
