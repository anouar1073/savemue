import React, { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
    if (value === undefined) return;
    return { [key]: value === "unset" ? undefined : value };
  };

const BackButton = () => {
    const navigation = useNavigation();

<View>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("MainScreen")}
      >

        <View style={[styles.backChild, styles.blur1Position]} />
        <View style={[styles.backItem, styles.backTransform]} />
        <View style={[styles.backInner, styles.backTransform2]} />
      </Pressable>
    </View>}

const styles = StyleSheet.create({
    backTransform: {
        transform: [
          {
            rotate: "-55deg",
          },
        ],
        backgroundColor: Color.nabvarBlue,
        borderRadius: Border.br_7xs,
        //position: "absolute",
        left: "45%",
        top: "41%"
      },
      backTransform2: {
        transform: [
          {
            rotate: "55deg",
          },
        ],
        backgroundColor: Color.nabvarBlue,
        borderRadius: Border.br_7xs,
        //position: "absolute",
        left: "45%",
        bottom: "42%"
      },
      blur1Position: {
        left: "0%",
        right: "0%",
        width: "100%",
        //position: "absolute",
      },
      backChild: {
        height: "100%",
        top: "0%",
        bottom: "0%",
        borderRadius: Border.br_xs,
        backgroundColor: Color.white,
        opacity: 0.6,
      },
      backItem: {
        height: "39.62%",
        width: "10%",
        top: "49.62%",
        right: "60.37%",
        bottom: "10.77%",
        left: "29.63%",
      },
      backInner: {
        height: "41.15%",
        width: "10.37%",
        top: "19.23%",
        right: "34.07%",
        bottom: "39.62%",
        left: "55.56%",
      },
      back: {
        top: 28,
        left: 8,
        borderRadius: Border.br_12xs,
        width: 60,
        height: 60,
        //position: "absolute",
      },
})

export default BackButton;