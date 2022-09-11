import { Text, View } from "react-native";
import * as React from "react";
import CandidateProfile from "../components/candidate-preview/candidate-profile";
import CandidateImageList from "../components/candidate-preview/candidate-image-list";
import { createStackNavigator } from "@react-navigation/stack";

const CandidatePreview = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="candidate_profile" component={CandidateProfile} />
      <Stack.Screen
        name="candidate_image_list"
        component={CandidateImageList}
      />
    </Stack.Navigator>
  );
};

export default CandidatePreview;
