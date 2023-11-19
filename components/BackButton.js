import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

import { windowWidth } from "../tools/window_size";

const BackButton = () => {
  const navigation = useNavigation();
  return (
      <Pressable style={[styles.mapBtn]} onPress={() => navigation.navigate("MainScreen")}>
        <View style={[styles.backChild, styles.blur1Position]} />
        <View style={styles.backItem} />
        <View style={styles.backInner} />
      </Pressable>
  );
};

const styles = StyleSheet.create({
  mapBtn: {
    position: "absolute",
    top: 20,
    left: 20,
    height: 30,
    width: 70,
    height: 70,
    alignSelf: "left",
    zIndex: 3,
  },
  backChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    opacity: 0.6,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  backItem: {
    height: "39.62%",
    width: "10%",
    transform: [
      {
        rotate: "-55deg",
      },
    ],
    backgroundColor: Color.nabvarBlue,
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: "45%",
    top: "41%"
  },
  backInner: {
    height: "41.15%",
    width: "10.37%",
    top: "19.23%",
    transform: [
      {
        rotate: "55deg",
      },
    ],
    backgroundColor: Color.nabvarBlue,
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: "45%",
  },
});

export default BackButton;