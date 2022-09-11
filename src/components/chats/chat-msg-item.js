import { View, Text, StyleSheet } from "react-native";
import { VERTICAL_PADDING_1, HORIZONTAL_PADDING_1 } from "../constants";
const ChatMsgItem = (props) => {
  const { fromThisUser } = props;
  return (
    <View style={styles.container({ fromThisUser })}>
      <View style={styles.msg({ fromThisUser })}>
        <Text style={styles.text}>{props.text}</Text>
        <Text style={styles.time}>8:00 PM</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: (props) => {
    return {
      width: "100%",
      paddingHorizontal: HORIZONTAL_PADDING_1,
      marginTop: VERTICAL_PADDING_1,
      alignItems: props.fromThisUser ? "flex-end" : "flex-start",
    };
  },
  msg: (props) => {
    return {
      backgroundColor: props.fromThisUser ? "grey" : "blue",

      padding: 10,
      maxWidth: 300,
      borderRadius: 5,
    };
  },
  text: {
    fontSize: 16,
    color: "#f2f2f2",
  },
  time: {
    color: "#d9d9d9",
  },
});
export default ChatMsgItem;
