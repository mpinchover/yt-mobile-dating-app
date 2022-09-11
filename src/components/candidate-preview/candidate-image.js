import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as React from "react";

const url =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";
const CandidateImage = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("candidate_image_list")}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: url }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "100%",
    // borderWidth: 1,
    // borderColor: "black",
  },
  image: {
    // height: "100%",
    // width: 50,
    flex: 1,
  },
});

export default CandidateImage;
