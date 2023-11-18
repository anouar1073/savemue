import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ToolbarPanic = ({
  toolbarPanicPosition,
  toolbarPanicTop,
  toolbarPanicLeft,
  onQuitBtnPress,
}) => {
  const toolbarPanicStyle = useMemo(() => {
    return {
      ...getStyleValue("position", toolbarPanicPosition),
      ...getStyleValue("top", toolbarPanicTop),
      ...getStyleValue("left", toolbarPanicLeft),
    };
  }, [toolbarPanicPosition, toolbarPanicTop, toolbarPanicLeft]);

  return (
    <View style={[styles.toolbarpanic, toolbarPanicStyle]}>
      <View style={[styles.toolbarpanicChild, styles.childPosition]} />
      <Pressable style={styles.quitBtn} onPress={onQuitBtnPress}>
        <Image
          style={[styles.quitBtnChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={styles.quit}>Quit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  toolbarpanicChild: {
    backgroundColor: Color.white,
  },
  quitBtnChild: {
    borderRadius: Border.br_2xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  quit: {
    top: "19.35%",
    left: "27.78%",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inter,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  quitBtn: {
    top: 7,
    left: 61,
    width: 36,
    height: 16,
    position: "absolute",
  },
  toolbarpanic: {
    width: 159,
    height: 31,
  },
});

export default ToolbarPanic;
