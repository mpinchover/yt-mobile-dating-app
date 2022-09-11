import { Text, View } from "react-native";
import * as React from "react";
import Settings from "../components/settings/settings";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const SettingsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsScreen;
