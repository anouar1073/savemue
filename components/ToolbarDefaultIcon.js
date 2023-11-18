import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { windowWidth } from "../tools/window_size";

const ToolbarDefaultIcon = () => {
  return (
    <Image
      style={styles.toolbardefaultIcon}
      contentFit="cover"
      source={require("../assets/toolbardefault.png")}
    />
  );
};

const styles = StyleSheet.create({
  toolbardefaultIcon: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: windowWidth,
    height: 70,
  },
});

export default ToolbarDefaultIcon;
