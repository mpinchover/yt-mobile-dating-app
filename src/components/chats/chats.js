import { Text, View, FlatList, StyleSheet } from "react-native";
import ChatListItem from "./chat-list-item";

const DATA = [
  {
    uuid: "some-uuid-1",
    matchedUserUuid: "matched-uuid-1",
    text: "hey how's it going?",
  },
  {
    uuid: "some-uuid-2",
    matchedUserUuid: "matched-uuid-2",
    text: "hey how's it going?",
  },
];

const Chats = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <ChatListItem navigation={navigation} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.uuid}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeperator}></View>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "black",
  },
  flatlist: {
    //borderWidth: 1,

    width: "100%",
    // borderColor: "red",
  },
  itemSeperator: {
    backgroundColor: "grey",
    height: 1,
    width: "100%",
  },
});

export default Chats;
