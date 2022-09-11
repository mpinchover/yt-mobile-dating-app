import { Text, View } from "react-native";
import * as React from "react";
import CandidateImage from "./candidate-image";
import CandidateInfo from "./candidate-info";
import { createStackNavigator } from "@react-navigation/stack";

const CandidateProfile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CandidateImage navigation={navigation} />
      <CandidateInfo />
    </View>
  );
};

export default CandidateProfile;
