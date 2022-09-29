import { Text, View, StyleSheet } from "react-native";
import * as React from "react";
import { useState } from "react";
import CandidateImage from "./candidate-image";
import CandidateInfo from "./candidate-info";
import { Dimensions } from "react-native";
// import DecisionButtons from "./decision-buttons";
import { createStackNavigator } from "@react-navigation/stack";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { todoListAtom } from "../../state/test";
const CandidateProfile = ({ navigation, onHandleNext }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  console.log("TODO LIST IS: ");
  console.log(todoList);

  useState(() => {
    // setTodoList((oldState) => {
    //   console.log("ADDING");
    //   return [...oldState, { item: "new item" }];
    // });
    // console.log("RUNNING USE STATE");
  }, []);

  return (
    <View style={styles.container}>
      <CandidateImage onHandleNext={onHandleNext} navigation={navigation} />
      <CandidateInfo />
    </View>
  );
};

export default CandidateProfile;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
});
