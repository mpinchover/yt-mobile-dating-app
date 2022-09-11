import { View, Text, StyleSheet } from "react-native";
import { HORIZONTAL_PADDING_1, VERTICAL_PADDING_1 } from "../constants";
import { Row } from "../common";

const ImagePlaceholder = () => {
  return <View style={styles.imageSelection}></View>;
};

const ImageSelection = () => {
  return (
    <View style={styles.container}>
      <ImagePlaceholder />
      <ImagePlaceholder />
      <ImagePlaceholder />
      <ImagePlaceholder />
    </View>
  );
};

export default ImageSelection;

const styles = StyleSheet.create({
  container: {
    marginTop: VERTICAL_PADDING_1,
    flexDirection: "row",
    paddingHorizontal: HORIZONTAL_PADDING_1,
    justifyContent: "space-between",
  },
  imageSelection: {
    height: 100,
    width: 80,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
  },
});
