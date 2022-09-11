import { Text, View } from "react-native";
import * as React from "react";
import CandidateProfile from "../components/candidate-preview/candidate-profile";
import CandidateImageList from "../components/candidate-preview/candidate-image-list";
import CandidateCarousel from "../components/candidate-preview/candidate-carousel";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const CandidatePreview = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="candidate_profile" component={CandidateCarousel} />
      <Stack.Screen
        name="candidate_image_list"
        component={CandidateImageList}
      />
    </Stack.Navigator>
  );
};

export default CandidatePreview;
