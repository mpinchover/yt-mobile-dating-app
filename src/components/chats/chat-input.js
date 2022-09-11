import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react-native";
import { HORIZONTAL_PADDING_1, VERTICAL_PADDING_2 } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        multiline
        style={styles.textInput}
        placeholder="type message"
      ></TextInput>
      <TouchableOpacity>
        <MaterialCommunityIcons name="send" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: "lightgrey",
    paddingHorizontal: HORIZONTAL_PADDING_1,
    paddingVertical: VERTICAL_PADDING_2,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
});

export default ChatInput;
