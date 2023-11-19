import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { windowWidth } from "../tools/window_size";
import { FontSize } from "../GlobalStyles";

const ToolbarPanic = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.body}>
      <Pressable style={styles.btn} onPress={() => navigation.navigate("PanicScreen")}>
      <Text style={styles.btnTxt}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    bottom: 0,
    left: 0,
    width: "20%",
    height: "60%",
    alignSelf: "center",
    margin: "auto",
    borderRadius: 10,
    backgroundColor: "red",
  },
  toolbarpanicIcon: {
    top: "20%",
    left: 0,
    width: "20%",
    height: "60%",
    alignSelf: "center",
    margin: "auto",
    borderRadius: 10,
  },
  btn: {
    position: "absolute",
    width: "30%",
    height: "100%",
    alignSelf: "center",
    opacity: 0,
    zIndex: 3,
  },
  btnTxt: {
    fontSize: FontSize.size_2xs,
    fontWeight: 700,
    position: "absolute",
    top: "30%",
    left: "45%",
    alignSelf: "center",
    margin: "auto",
  }
});

export default ToolbarPanic;