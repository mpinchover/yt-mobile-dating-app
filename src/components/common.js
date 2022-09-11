import { View } from "react-native";

export const Row = ({ children }) => {
  return (
    <View style={{ flexDirection: "row", width: "100%" }}>{children}</View>
  );
};
