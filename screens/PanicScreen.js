import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ToolbarPanic from "../components/ToolbarPanic";
import NavBar from "../components/NavBar";
import PanicScreeenBackground from "../components/PanicScreeenBackground";
import { Color } from "../GlobalStyles";

const PanicScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.panicScreen}>
      <ToolbarPanic
        onQuitBtnPress={() => navigation.navigate("MainScreen")}
        style={styles.toolBar}
      />
      <NavBar
          navBarPosition="absolute"
          navBarTop="0%"
          navBarLeft="0%"
          style={styles.navbar}
        />

      <View style={styles.frame}>
        <PanicScreeenBackground
          imageDimensions={require("../assets/background1.png")}
          panicScreeenBackgroundHeight={340}
          panicScreeenBackgroundMarginTop={-11}
          backgroundIconRight="-0.62%"
          backgroundIconLeft="0.63%"
          iconTop="64.5%"
          notfallModusTop="5.24%"
          viewHeight="26%"
          viewTop="14.12%"
          backgroundHeight="45.14%"
          backgroundTop="54.86%"
          backgroundBackgroundColor="#b5c1ff"
          whle110Top="72.74%"
          viewHeight1="26.5%"
          viewTop1="42.94%"
          backgroundHeight1="44.28%"
          backgroundTop1="55.72%"
          whle112Top="73.25%"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 60,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: -1,
    width: 161,
    overflow: "hidden",
    paddingRight: 1,
    justifyContent: "flex-end",
  },
  panicScreen: {
    backgroundColor: Color.darkgray,
    flex: 1,
    width: "100%",
    height: 324,
  },
});

export default PanicScreen;
