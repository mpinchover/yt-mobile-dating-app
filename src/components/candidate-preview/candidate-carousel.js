import { FlatList, View, StyleSheet } from "react-native";
import { useRef, useState } from "react";
import CandidateProfile from "./candidate-profile";

const DATA = [
  {
    uuid: "some-uuid-1",
  },
  {
    uuid: "some-uuid-2",
  },
];

// https://medium.com/geekculture/how-to-integrate-redux-in-expo-react-native-5a4a0bd0f0c6
const CandidateCarousel = ({ navigation }) => {
  const carouselfRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  onHandleNext = () => {
    if (carouselfRef.current) {
      carouselfRef.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={carouselfRef}
        scrollEnabled={false}
        style={styles.carousel}
        horizontal={true}
        keyExtractor={(item) => item.uuid}
        data={DATA}
        renderItem={() => (
          <CandidateProfile
            onHandleNext={onHandleNext}
            navigation={navigation}
          />
        )}
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
