import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import NavBar from "../components/NavBar";
import WeatherContainer from "../components/WeatherContainer";
import DropDownButton from "../components/DropDownButton";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {ToolbarDefaultIcon} from "../components/ToolbarDefaultIcon";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const HeatwaveScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.heatwaveScreen}>
      <ToolbarDefaultIcon />
      <NavBar navBarPosition="absolute" navBarTop={0} navBarLeft={-1} />
      {/* <ScrollView>
      <View style={styles.component2}>
        <WeatherContainer />
        <View style={[styles.background1, styles.background1Position]} />
        <View style={styles.component3}>
          <View style={[styles.vectorParent, styles.frameChildPosition]}>
            <Image
              style={[styles.dropDownWarningFrame, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-6.png")}
            />
            <Image
              style={[styles.frameItem, styles.highPrioWarningFrame]}
              contentFit="cover"
              source={require("../assets/rectangle-4.png")}
            />
            <Text
              style={[styles.beiUnwohlseinNach1, styles.highPrioWarningText]}
            >{`Bei Unwohlsein nach längerer Hitze- und Sonnenstrahlenbelastung suchen Sie einen Arzt oder eine Ärztin auf oder rufen Sie sofort die Notrufnummer 112 an. `}</Text>
            <DropDownButton
              dimensions={require("../assets/rectangle-51.png")}
              imageDimensions={require("../assets/arrow-12.png")}
              dropDownButtonPosition="absolute"
              dropDownButtonWidth="41.24%"
              dropDownButtonHeight="22.5%"
              dropDownButtonTop="70.5%"
              dropDownButtonRight="56.08%"
              dropDownButtonBottom="0%"
              dropDownButtonLeft="2.69%"
              rectangleIconHeight="100%"
              rectangleIconWidth="100%"
              rectangleIconRight="12.7%"
              rectangleIconBottom="17.34%"
              arrowIconHeight="45.28%"
              arrowIconWidth="12.05%"
              arrowIconTop="25.79%"
              arrowIconRight="79.64%"
              arrowIconBottom="43.93%"
              arrowIconLeft="8.31%"
              symptomeHeight="70.26%"
              symptomeWidth="52.44%"
              symptomeTop="10%"
              symptomeLeft="23.78%"
            />
          </View>
        </View>
        <Pressable
          style={styles.mapBtn}
          onPress={() => navigation.navigate("MapScreen")}
        >
          <View style={[styles.mapBtnChild, styles.highPrioWarningFrame]} />
          <Text style={[styles.mapButtonText, styles.highPrioWarningText]}>
            Auf der Karte
          </Text>
        </Pressable>
      </View>
      </ScrollView> */}
      <Image
        style={styles.settingsbtnIcon1}
        contentFit="cover"
        source={require("../assets/settingsbtn.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background1Position: {
    width: "100%",
    left: 0,
    position: "absolute",
  },
  //red frame again
  frameChildPosition: {
    left: "0%",
    position: "absolute",
  },
  //idfk
  frameLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "101.43%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  //frame red thing something too
  highPrioWarningFrame: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  //text auf red thing
  highPrioWarningText: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_x,
    position: "absolute",
  },
  //white big thing
  background1: {
    top: "15%",
    backgroundColor: Color.white,
    height: "100%",
    width: "100%",
  },
  //another red frame
  dropDownWarningFrame: {
    top: "100%",
    bottom: "-100%",
    left: "0%",
    position: "absolute",
  },
  //red thing frame
  frameItem: {
    bottom: "-1.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "101.43%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  //Zeile Text
  beiUnwohlseinNach1: {
    height: "85.96%",
    width: "95.3%",
    top: "7.8%",
    left: "2.69%",
    fontWeight: "700",
    fontSize: FontSize.size_7xs,
    color: Color.white,
  },
  //something with warning
  vectorParent: {
    height: "100%",
    top: "1.41%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    overflow: "hidden",
    width: "100%",
  },
  //red thing
  component3: {
    height: "15.46%",
    width: "92.48%",
    top: "20.32%",
    right: "3.79%",
    bottom: "69.22%",
    left: "3.73%",
    position: "absolute",
  },
  //yellow rectangle
  mapBtnChild: {
    height: "100%",
    width: "91.3%",
    right: "8.7%",
    borderRadius: Border.br_2xs,
    backgroundColor: "#ffe99c",
    bottom: "0%",
  },
  mapButtonText: {
    height: "82.63%",
    width: "100%",
    top: "31.58%",
    left: "10.14%",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_5xs,
    fontWeight: "700",
    color: Color.black,
  },
  //Mapbutton
  mapBtn: {
    top: "50%",
    left: "50%",
    width: "40%",
    height: "5%",
    position: "absolute",
  },
  component2: {
    top: "11.58%",
    left: -1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  settingsbtnIcon1: {
    top: "5%",
    right: "5%",
    width: 60,
    height: 60,
    position: "absolute",
    zIndex: 4, 
  },
  toolbardefaultIcon: {
    top: "90%",
    height: 32,
  },
  heatwaveScreen: {
    backgroundColor: Color.darkgray,
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    overflowY: "scroll"
  },
});

export default HeatwaveScreen;
