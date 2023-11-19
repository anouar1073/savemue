import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ToolbarPanic from "../components/ToolbarPanic";
import NavBar from "../components/NavBar";
import PanicScreenBackground from "../components/PanicScreeenBackground";
import { Color } from "../GlobalStyles";

const PanicScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.panicScreen}>
      <NavBar />
      <PanicScreenBackground />
      <ToolbarPanic />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    height: "90%",
  },
  panicScreen: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: Color.darkgray,
    width: "100%",
    height: "100%",
  },
});

export default PanicScreen;
