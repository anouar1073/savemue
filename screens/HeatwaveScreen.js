import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import NavBar from "../components/NavBar";
import WeatherContainer from "../components/WeatherContainer";
import DropDownButton from "../components/DropDownButton";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HeatwaveScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.heatwaveScreen}>
      <NavBar navBarPosition="absolute" navBarTop={0} navBarLeft={-1} />
      <View style={styles.component2}>
        <WeatherContainer />
        <View style={[styles.background1, styles.background1Position]} />
        <View style={styles.component3}>
          <View style={[styles.vectorParent, styles.frameChildPosition]}>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-6.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameItemPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-4.png")}
            />
            <Text
              style={[styles.beiUnwohlseinNach1, styles.aufDerKarte1Typo]}
            >{`Bei Unwohlsein nach längerer Hitze- und Sonnenstrahlenbelastung suchen Sie einen Arzt oder eine Ärztin auf oder rufen Sie sofort die Notrufnummer 112 an. `}</Text>
            <DropDownButton
              dimensions={require("../assets/rectangle-51.png")}
              imageDimensions={require("../assets/arrow-12.png")}
              dropDownButtonPosition="absolute"
              dropDownButtonWidth="41.24%"
              dropDownButtonHeight="22.5%"
              dropDownButtonTop="77.5%"
              dropDownButtonRight="56.08%"
              dropDownButtonBottom="0%"
              dropDownButtonLeft="2.69%"
              rectangleIconHeight="82.66%"
              rectangleIconWidth="87.3%"
              rectangleIconRight="12.7%"
              rectangleIconBottom="17.34%"
              arrowIconHeight="24.28%"
              arrowIconWidth="12.05%"
              arrowIconTop="31.79%"
              arrowIconRight="79.64%"
              arrowIconBottom="43.93%"
              arrowIconLeft="8.31%"
              symptomeHeight="35.26%"
              symptomeWidth="52.44%"
              symptomeTop="29.48%"
              symptomeLeft="23.78%"
            />
          </View>
        </View>
        <Pressable
          style={styles.mapBtn}
          onPress={() => navigation.navigate("MapScreen")}
        >
          <View style={[styles.mapBtnChild, styles.frameItemPosition]} />
          <Text style={[styles.aufDerKarte1, styles.aufDerKarte1Typo]}>
            Auf der Karte
          </Text>
        </Pressable>
      </View>
      <Image
        style={styles.settingsbtnIcon1}
        contentFit="cover"
        source={require("../assets/settingsbtn.png")}
      />
      <Image
        style={[styles.toolbardefaultIcon, styles.background1Position]}
        contentFit="cover"
        source={require("../assets/toolbardefault.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background1Position: {
    width: 160,
    left: 0,
    position: "absolute",
  },
  frameChildPosition: {
    left: "0%",
    position: "absolute",
  },
  frameLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "101.43%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  frameItemPosition: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  aufDerKarte1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  background1: {
    top: 132,
    backgroundColor: Color.white,
    height: 557,
  },
  frameChild: {
    top: "100%",
    bottom: "-101.43%",
    left: "0%",
    position: "absolute",
  },
  frameItem: {
    bottom: "-1.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "101.43%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  beiUnwohlseinNach1: {
    height: "85.96%",
    width: "95.3%",
    top: "7.8%",
    left: "2.69%",
    fontWeight: "600",
    color: Color.white,
  },
  vectorParent: {
    height: "98.59%",
    top: "1.41%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    overflow: "hidden",
    width: "100%",
  },
  component3: {
    height: "10.46%",
    width: "92.48%",
    top: "20.32%",
    right: "3.79%",
    bottom: "69.22%",
    left: "3.73%",
    position: "absolute",
  },
  mapBtnChild: {
    height: "100%",
    width: "91.3%",
    right: "8.7%",
    borderRadius: Border.br_2xs,
    backgroundColor: "#ffe99c",
    bottom: "0%",
  },
  aufDerKarte1: {
    height: "52.63%",
    width: "89.86%",
    top: "31.58%",
    left: "10.14%",
    fontWeight: "500",
    color: Color.black,
  },
  mapBtn: {
    top: 220,
    left: 82,
    width: 69,
    height: 19,
    position: "absolute",
  },
  component2: {
    top: 33,
    left: -1,
    width: 161,
    height: 746,
    overflow: "hidden",
    position: "absolute",
  },
  settingsbtnIcon1: {
    top: 0,
    left: 125,
    width: 29,
    height: 29,
    position: "absolute",
  },
  toolbardefaultIcon: {
    top: 294,
    height: 31,
  },
  heatwaveScreen: {
    backgroundColor: Color.darkgray,
    flex: 1,
    height: 324,
    width: "100%",
  },
});

export default HeatwaveScreen;
