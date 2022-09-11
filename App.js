import { StatusBar } from "expo-status-bar";

import * as React from "react";
import { Text, View, StyleSheet, Settings } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CandidatePreview from "./src/screens/candidate-preview";
import ChatsScreen from "./src/screens/chats-screen";
import SettingsScreen from "./src/screens/settings-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

const handleTabBarIcon = ({ navigation, color, size, route }) => {
  if (route.name === "matching") {
    return (
      <MaterialCommunityIcons
        name="heart-outline"
        size={24}
        color={navigation.isFocused() ? "black" : "darkgrey"}
      />
    );
  } else if (route.name === "messages") {
    return (
      <MaterialCommunityIcons
        name="message-outline"
        size={24}
        color={navigation.isFocused() ? "black" : "darkgrey"}
      />
    );
  } else if (route.name === "settings") {
    return (
      <SimpleLineIcons
        name="settings"
        size={24}
        color={navigation.isFocused() ? "black" : "darkgrey"}
      />
    );
  }
};

export default function App() {
  return (
    <NavigationContainer labeled={false}>
      <Tab.Navigator
        initialRouteName="Settings"
        screenOptions={(props) => {
          return {
            headerShown: false,
            tabBarIcon: () => handleTabBarIcon(props),
            tabBarShowLabel: false,
          };
        }}
      >
        <Tab.Screen name="matching" component={CandidatePreview} />
        <Tab.Screen name="messages" component={ChatsScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
