import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import NavBar from "../components/NavBar";
import { useNavigation } from "@react-navigation/native";
import ToolbarDefaultIcon from "../components/ToolbarDefaultIcon";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;


const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainScreen}>
      <NavBar style={styles.navBar} navBarPosition="absolute" navBarTop={0}/>
      <ScrollView style={styles.frame}>
        <View style={styles.mainScreeenBackground}>
          <View style={[styles.background7, styles.blur1Position]} />
          <Text
            style={[
              styles.handlungsempfehlungenFrBrg1,
              styles.duBistOfflineContainerFlexBox,
            ]}
          >
            Handlungsempfehlungen für Bürger:
          </Text>
          <Pressable
            style={[styles.infoPanelssunnyPannel, styles.infoShadowBox1]}
            onPress={() => navigation.navigate("HeatwaveScreen")}
          >
            <View style={[styles.background8, styles.backgroundPosition1]} />
            <Text style={[styles.hitze, styles.hitzeTypo]}> Hitze</Text>
            <Image
              style={[styles.heatWave1Icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/heatwave-1.png")}
            />
          </Pressable>
          <View style={[styles.infoPanelsstarkesGewitter, styles.infoShadowBox]}>
            <View style={[styles.background9, styles.backgroundPosition]} />
            <Text style={[styles.starkesGewitter, styles.hitzeTypo]}>
              Starkes Gewitter
            </Text>
            <Image
              style={styles.storm1Icon1}
              contentFit="cover"
              source={require("../assets/storm-1.png")}
            />
          </View>
          <View style={[styles.infoPanelsglatteisPannel, styles.infoShadowBox1]}>
            <View style={[styles.background10, styles.backgroundPosition1]} />
            <Text style={[styles.glatteis, styles.hitzeTypo]}>Glatteis</Text>
            <Image
              style={[styles.iceCube1Icon1]}
              contentFit="cover"
              source={require("../assets/icecube-1.png")}
            />
          </View>
          <View style={[styles.infoPanelswindyPannel, styles.infoShadowBox]}>
            <View style={[styles.background11, styles.backgroundPosition]} />
            <Text style={[styles.schwereStrumben, styles.wind1Icon1Position]}>
              Schwere Strumböen
            </Text>
            <Image
              style={[styles.wind1Icon1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/wind-1.png")}
            />
          </View>
          <Pressable
            style={[styles.infoPanelsrainyPannel, styles.infoShadowBox]}
            onPress={() => navigation.navigate("StormScreen")}
          >
            <View style={[styles.background12, styles.backgroundPosition]} />
            <Text style={[styles.starkregen, styles.starkregenTypo]}>
              Starkregen
            </Text>
            <Image
              style={[styles.rainy1Icon1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/rainy-1.png")}
            />
          </Pressable>

          <View style={[styles.infoPanelsveryRainyPannel, styles.infoShadowBox]}>
            <View style={[styles.background13, styles.backgroundPosition]} />
            <Text style={[styles.extremStarkerStarkregen1, styles.hitzeTypo]}>
              Extrem starker Starkregen
            </Text>
            <Image
              style={[styles.wind1Icon1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/rain-1.png")}
            />
          </View>


          <View
            style={[
              styles.headerPannelsofflinePannel,
              styles.backgroundImageIconPosition,
            ]}
          >
            <Image
              style={[styles.backgroundImageIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/background-image.png")}
            />
            <View style={[styles.blur1, styles.blur1Position]} />
            <Text
              style={[
                styles.duBistOfflineContainer,
                styles.duBistOfflineContainerFlexBox,
              ]}
            >
              <Text style={styles.duBistOffline1}>{`Du bist offline!\n`}</Text>
              <Text style={styles.verbindeDichMit}>
                Verbinde dich mit dem Internet um auf dem aktuellen Stand zu sein
              </Text>
            </Text>
          </View>

        </View>
      </ScrollView>
      <Pressable
        style={[styles.settingsbtnLayout]}
        onPress={() => navigation.navigate("SettingsScreen")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/settingsbtn.png")}
        />
      </Pressable>
      <ToolbarDefaultIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    backgroundColor: "white",
    height: "100%",
    marginBottom: 40,
  },
  blur1Position: {
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  duBistOfflineContainerFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  infoShadowBox1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "88.13%",
    height: "9.03%",
    right: "5.63%",
    left: "6.25%",
    position: "absolute",
  },
  backgroundPosition1: {
    borderRadius: Border.br_7xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  hitzeTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  infoShadowBox: {
    height: "9.69%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "88.13%",
    position: "absolute",
  },
  backgroundPosition: {
    bottom: "4.55%",
    top: "2.27%",
    height: "93.18%",
    borderRadius: Border.br_7xs,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  settingsbtnLayout: {
    top: "5%",
    right: "5%",
    height: 60,
    width: 60,
    position: "absolute",
    zIndex: 4,
  },
  wind1Icon1Position: {
    top: "15.91%",
    height: "63.64%",
  },
  iconPosition: {
    bottom: "20.45%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  starkregenTypo: {
    width: "47.52%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_2xs,
  },
  backgroundImageIconPosition: {
    top: "1%",
    left: "-2%",
    width: "110%",
  },
  background7: {
    height: "79.74%",
    top: "25.11%",
    bottom: "-4.85%",
    backgroundColor: Color.white,
    width: "100%",
  },
  handlungsempfehlungenFrBrg1: {
    height: "3.96%",
    width: "90.63%",
    top: "29.07%",
    color: Color.black,
    left: "6.25%",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
  },
  background8: {
    backgroundColor: "#fddbbc",
  },
  hitze: {
    height: "31.71%",
    top: "34.15%",
    width: 42,
    left: "50%",
    marginLeft: -0.5,
    fontWeight: "600",
  },
  heatWave1Icon1: {
    height: 60,
    width: 60,
    top: "10.51%",
    right: "73.05%",
    bottom: "21.95%",
    left: "9.22%",
  },
  infoPanelssunnyPannel: {
    top: "33.04%",
    bottom: "57.93%",
    height: 100,
    zIndex: 5,
    testPanel:{
      backgroundColor: "yellow",
      height: 40,
      width: 100,
    },
  },
  background9: {
    backgroundColor: "#bebacf",
  },
  starkesGewitter: {
    height: "61.36%",
    width: "39.01%",
    top: "18.18%",
    left: "46.1%",
    fontWeight: "500",
  },
  storm1Icon1: {
    top: "10%",
    width: 60,
    height: 60,
    left: "10%",
    position: "absolute",
  },
  infoPanelsstarkesGewitter: {
    top: "85.68%",
    right: "6.25%",
    bottom: "4.63%",
    left: "5.63%",
  },
  background10: {
    backgroundColor: "#edfeff",
  },
  glatteis: {
    height: "26.83%",
    top: "36.59%",
    width: "30%",
    fontWeight: "500",
    left: "50%",
    marginLeft: -0.5,
  },
  iceCube1Icon1: {
    top: "10%",
    left: "8%",
    width: 60,
    height: 60,
  },
  infoPanelsglatteisPannel: {
    top: "53.96%",
    bottom: "37%",
  },
  background11: {
    backgroundColor: "#c2ffe9",
  },
  schwereStrumben: {
    left: "42.55%",
    width: "47.52%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_2xs,
    position: "absolute",
    fontWeight: "500",
  },
  wind1Icon1: {
    height: 60,
    width: 65,
    top: "15.51%",
    right: "73.05%",
    bottom: "21.95%",
    left: "9.22%",
  },
  infoPanelswindyPannel: {
    top: "43.17%",
    bottom: "47.14%",
    right: "5.63%",
    height: "9.69%",
    left: "6.25%",
    marginBottom: 300,
  },
  background12: {
    backgroundColor: "#d1ecff",
  },
  starkregen: {
    height: "34.09%",
    top: "31.82%",
    left: "39.72%",
    fontWeight: "600",
  },
  rainy1Icon1: {
    height: 50,
    width: 57,
    top: "25%",
    right: "72.34%",
    left: "8.51%",
  },
  infoPanelsrainyPannel: {
    top: "64.1%",
    bottom: "26.21%",
    right: "5.63%",
    height: "9.69%",
    left: "6.25%",
  },
  background13: {
    backgroundColor: "#aacde7",
  },
  extremStarkerStarkregen1: {
    height: "47.73%",
    width: "58.16%",
    top: "22.73%",
    left: "36.17%",
    fontWeight: "500",
  },
  infoPanelsveryRainyPannel: {
    top: "74.89%",
    bottom: "15.42%",
    right: "5.63%",
    height: "9.69%",
    left: "6.25%",
  },
  backgroundImageIcon: {
    height: "102.35%",
    right: "-0.62%",
    bottom: "-2.35%",
    left: "0.63%",
    borderRadius: 3,
    top: "0%",
    width: "100%",
  },
  blur1: {
    height: "34.87%",
    top: "68.91%",
    bottom: "-3.78%",
    backgroundColor: Color.gray_100,
    width: "100%",
  },
  duBistOffline1: {
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.inter,
  },
  verbindeDichMit: {
    fontWeight: "300",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_5xs,
  },
  duBistOfflineContainer: {
    height: "15.46%",
    width: "89.31%",
    top: "73.61%",
    left: "5.06%",
    color: Color.white,
  },
  headerPannelsofflinePannel: {
    height: "26.21%",
    bottom: "73.79%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  mainScreeenBackground: {
    top: 70,
    left: 0,
    width: "100%",
    height: 1000,
    overflowY: "show",
    marginBottom: "20%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  mainScreen: {
    backgroundColor: Color.darkgray,
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    overflowY: "scroll"
  },
  navBar: {
    width: windowWidth,
  },
});

export default MainScreen;
