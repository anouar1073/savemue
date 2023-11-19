import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { windowWidth } from "../tools/window_size";

const WeatherContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.top, styles.topPosition]}>
      <View style={[styles.headerPannelsheatWavePanne, styles.topPosition]}>
        <Image
          style={[styles.backgroundImageIcon, styles.topPosition]}
          contentFit="cover"
          source={require("../assets/background-image2.png")}
        />
        <View style={[styles.blur1, styles.blur1Position]} />
        <Text style={styles.aktuellesWetterHitzewelleContainer}>
          <Text style={styles.aktuellesWetter}>{`Aktuelles Wetter
`}</Text>
          <Text style={styles.hitzewelle}>Hitzewelle</Text>
        </Text>
      </View>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("MainScreen")}
      >
        <View style={[styles.backChild, styles.blur1Position]} />
        <View style={[styles.backItem, styles.backTransform]} />
        <View style={[styles.backInner, styles.backTransform2]} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    width: windowWidth,
    height: 300,
    top: 0,
    position: "absolute",
  },
  blur1Position: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  backTransform: {
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
  backTransform2: {
    transform: [
      {
        rotate: "55deg",
      },
    ],
    backgroundColor: Color.nabvarBlue,
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: "45%",
    bottom: "42%"
  },
  backgroundImageIcon: {
    left: 1,
    width: "100%",
    height: "100%",
    top: 0,
  },
  blur1: {
    height: "34.09%",
    top: "67.27%",
    bottom: "-1.36%",
    backgroundColor: Color.gray_100,
  },
  aktuellesWetter: {
    fontWeight: "500",
    fontFamily: FontFamily.inter,
  },
  hitzewelle: {
    fontWeight: "300",
    fontFamily: FontFamily.inter,
  },
  aktuellesWetterHitzewelleContainer: {
    height: "15.15%",
    width: "89.31%",
    top: "71.97%",
    left: "5.06%",
    fontSize: FontSize.size_3xs,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  headerPannelsheatWavePanne: {
    width: 160,
    left: 0,
    height: "100%",
    top: 0,
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
    top: 8,
    left: 8,
    borderRadius: Border.br_12xs,
    width: 60,
    height: 60,
    position: "absolute",
  },
  top: {
    overflow: "hidden",
    width: windowWidth,
    left: 0,
    height: "100%",
    top: 0,
  },
});

export default WeatherContainer;
