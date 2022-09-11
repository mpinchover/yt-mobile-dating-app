import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const url =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";

const ProfileImagePreview = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("profile_preview_image_list")}
      >
        <Image style={styles.image} source={{ uri: url }} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImagePreview;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "red",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // backgroundColor: "white",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: "100%",
  },
});
