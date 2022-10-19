import React from "react";
import { View } from "react-native";
import styles from "./HomeStyles";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blockA}></View>
      <View style={styles.blockB}></View>
      <View style={styles.blockC}></View>
    </View>
  );
};

export default HomeView;
