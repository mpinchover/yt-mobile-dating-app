import { Text, View, Image, StyleSheet } from "react-native";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";

import { HORIZONTAL_PADDING_1, VERTICAL_PADDING_1 } from "../constants";
const CandidateInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Samantha, 28</Text>
      <Text style={styles.location}>New York, New York</Text>
      <View style={styles.mediaContainer}>
        <AntDesign style={styles.icon} name="youtube" size={24} color="red" />
        <Text style={styles.media}>What are asteroids?</Text>
      </View>
      <View style={styles.mediaContainer}>
        <AntDesign style={styles.icon} name="youtube" size={24} color="red" />
        <Text style={styles.media}>How to eat sushi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: VERTICAL_PADDING_1,
    paddingHorizontal: HORIZONTAL_PADDING_1,
    width: "100%",
  },
  header: {
    fontSize: 20,
  },
  location: {
    color: "grey",
  },
  mediaContainer: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
  },
  media: {
    color: "blue",
    fontSize: 16,
  },
});

export default CandidateInfo;
