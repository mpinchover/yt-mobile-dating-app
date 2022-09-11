import { Text, View } from "react-native";
import * as React from "react";
import Settings from "../components/settings/settings";
import { createStackNavigator } from "@react-navigation/stack";
import CandidateImageList from "../components/candidate-preview/candidate-image-list";
const Stack = createStackNavigator();

const SettingsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen
        name="profile_preview_image_list"
        component={CandidateImageList}
      />
    </Stack.Navigator>
  );
};

export default SettingsScreen;
