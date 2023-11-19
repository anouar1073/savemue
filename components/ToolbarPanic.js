import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { windowWidth } from "../tools/window_size";
import { Color, FontSize } from "../GlobalStyles";

const ToolbarPanic = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("MainScreen")}
      >
        <Text style={styles.btnTxt}>Quit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "20%",
    height: "5%",
    position: "absolute",
    bottom: "5%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: Color.backRed,
  },
  btn: {
    width: "100%",
    height: "100%",
    zIndex: 3,
  },
  btnTxt: {
    fontSize: FontSize.size_1x,
    alignSelf: "center",
    fontWeight: 700,
  },
});

export default ToolbarPanic;
