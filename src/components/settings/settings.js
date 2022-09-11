import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProfileImagePreview from "./profile-image-preview";
import ImageSelection from "./profile-images-selection";
import MediaLinksSelection from "./profile-media-links-selection";
import SelectedMediaLinks from "./profile-selected-media-links";
const Settings = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ProfileImagePreview navigation={navigation} />
      <MediaLinksSelection />
      <SelectedMediaLinks />
      <ImageSelection />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
