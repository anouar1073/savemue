import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

import { windowWidth } from "../tools/window_size";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavBar = ({ navBarPosition, navBarTop, navBarLeft }) => {
  const navBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navBarPosition),
      ...getStyleValue("top", navBarTop),
      ...getStyleValue("left", navBarLeft),
    };
  }, [navBarPosition, navBarTop, navBarLeft]);

  return (
    <View style={[styles.navbar, navBarStyle]}>
      <View style={styles.navbarChild} />
      <Text style={styles.savemue}>SaveMue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarChild: {
    height: "144.74%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-44.74%",
    left: "0%",
    backgroundColor: Color.nabvarBlue,
  },
  savemue: {
    top: "31.58%",
    left: "5%",
    marginTop: "6%",
    fontSize: "30ch",
    fontWeight: "700",
    fontFamily: FontFamily.inter,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  navbar: {
    width: windowWidth,
    height: "8%",
    zIndex: 3,
  },
});

export default NavBar;
