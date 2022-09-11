import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HORIZONTAL_PADDING_1, VERTICAL_PADDING_1 } from "../constants";

const url =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";
const ChatListItem = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("chat_window")}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: url }}></Image>
      <View style={styles.chatPreview}>
        <Text style={styles.author}>Chat list item</Text>
        <Text style={styles.textPreview}>Chat list item</Text>
      </View>
      <View style={styles.timeCtr}>
        <Text style={styles.time}>8:00 PM</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: HORIZONTAL_PADDING_1,
    paddingVertical: VERTICAL_PADDING_1,
    // borderWidth: 1,

    // borderColor: "red",
    // alignItems: "center",
    flexDirection: "row",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: "50%",
  },
  chatPreview: {
    marginLeft: HORIZONTAL_PADDING_1,
    flex: 1,
  },
  author: {
    fontSize: 16,
  },
  textPreview: {
    fontSize: 16,
    color: "grey",
  },
  timeCtr: {
    width: 80,

    alignItems: "center",
  },
  time: {
    fontSize: 16,
  },
});
export default ChatListItem;
