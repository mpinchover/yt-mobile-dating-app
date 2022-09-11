import { Text, View } from "react-native";
import * as React from "react";

import Chats from "../components/chats/chats";
import ChatWindow from "../components/chats/chat-window";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const ChatsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="chats" component={Chats} />
      <Stack.Screen name="chat_window" component={ChatWindow} />
    </Stack.Navigator>
  );
};

export default ChatsScreen;
