import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { windowWidth } from "../tools/window_size";

const ToolbarDefaultIcon = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.body}>
      <Image
        style={styles.toolbardefaultIcon}
        contentFit="cover"
        source={require("../assets/toolbardefault.png")}
      />
      <Pressable style={styles.btn} onPress={() => navigation.navigate("PanicScreen")}></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    position: "absolute",
    bottom: "0%",
  },
  toolbardefaultIcon: {
    bottom: 0,
    left: 0,
    width: windowWidth,
    height: 70,
  },
  btn: {
    position: "absolute",
    width: "30%",
    height: "100%",
    alignSelf: "center",
    opacity: 0,
    zIndex: 3,
  },
});

export default ToolbarDefaultIcon;
