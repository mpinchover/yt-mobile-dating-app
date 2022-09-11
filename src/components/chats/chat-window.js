import { View, Text, StyleSheet, FlatList } from "react-native";
import ChatMsgItem from "./chat-msg-item";
import ChatInput from "./chat-input";
const userUuid = "some-uuid-2";

const DATA = [
  {
    uuid: "some-uuid-1",
    from: "some-uuid-1",
    text: "hey how's it going?",
  },
  {
    uuid: "some-uuid-2",
    from: "some-uuid-2",
    text: "Good. You?",
  },
  {
    uuid: "some-uuid-3",
    from: "some-uuid-1",
    text: "Pretty good. I had a few questions I wanted to ask you about something if that's okay?",
  },
  {
    uuid: "some-uuid-4",
    from: "some-uuid-1",
    text: "hey how's it going?",
  },
  {
    uuid: "some-uuid-5",
    from: "some-uuid-2",
    text: "Good. You?",
  },
  {
    uuid: "some-uuid-6",
    from: "some-uuid-1",
    text: "Pretty good. I had a few questions I wanted to ask you about something if that's okay?",
  },
  {
    uuid: "some-uuid-7",
    from: "some-uuid-1",
    text: "hey how's it going?",
  },
  {
    uuid: "some-uuid-8",
    from: "some-uuid-2",
    text: "Good. You?",
  },
  {
    uuid: "some-uuid-9",
    from: "some-uuid-1",
    text: "Pretty good. I had a few questions I wanted to ask you about something if that's okay?",
  },
];

const ChatWindow = () => {
  const renderItem = ({ item }) => {
    return (
      <ChatMsgItem text={item.text} fromThisUser={item.from == userUuid} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.uuid}
        style={styles.flatlist}
      />
      <ChatInput />
    </View>
  );
};

export default ChatWindow;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  flatlist: {
    width: "100%",
  },
});
