import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HORIZONTAL_PADDING_1, VERTICAL_PADDING_1 } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";

const DecisionButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          { borderColor: "green", marginBottom: 20 },
        ]}
      >
        <MaterialCommunityIcons name="check" size={50} color="green" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, { borderColor: "red" }]}
      >
        <MaterialCommunityIcons name="window-close" size={50} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: VERTICAL_PADDING_1,
    right: HORIZONTAL_PADDING_1,
    // width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-between",
    paddingHorizontal: HORIZONTAL_PADDING_1,
    paddingTop: VERTICAL_PADDING_1,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "black",
    // width: 150,
    // height: 150,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    // backgroundColor: "white",
  },
});

export default DecisionButtons;
