import { Text, View, StyleSheet } from "react-native";
import * as React from "react";
import CandidateImage from "./candidate-image";
import CandidateInfo from "./candidate-info";
import { Dimensions } from "react-native";
// import DecisionButtons from "./decision-buttons";
import { createStackNavigator } from "@react-navigation/stack";

const CandidateProfile = ({ navigation, onHandleNext }) => {
  return (
    <View style={styles.container}>
      <CandidateImage onHandleNext={onHandleNext} navigation={navigation} />
      <CandidateInfo />
    </View>
  );
};

export default CandidateProfile;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
});
