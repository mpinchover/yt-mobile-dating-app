import { FlatList, View, StyleSheet } from "react-native";
import CandidateProfile from "./candidate-profile";

const DATA = [
  {
    uuid: "some-uuid-1",
  },
  {
    uuid: "some-uuid-2",
  },
];
const CandidateCarousel = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        style={styles.carousel}
        horizontal={true}
        keyExtractor={(item) => item.uuid}
        data={DATA}
        renderItem={() => <CandidateProfile navigation={navigation} />}
      />
    </View>
  );
};

export default CandidateCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    // flex: 1,
    // flexDirection: "row",
  },
});
