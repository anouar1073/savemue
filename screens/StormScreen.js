import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import NavBar from "../components/NavBar";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const StormScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.stormScreen}>
      <NavBar navBarPosition="absolute" navBarTop={0} navBarLeft={-1} />
      <Image
        style={styles.settingsbtnIcon1}
        contentFit="cover"
        source={require("../assets/settingsbtn.png")}
      />
      <View style={styles.stormBackground}>
        <View style={[styles.background1, styles.blur1Position]} />
        <Text
          style={[styles.beiUnwohlseinNach1, styles.beiUnwohlseinNach1FlexBox]}
        >{`Bei Unwohlsein nach längerer Hitze- und Sonnenstrahlenbelastung suchen Sie einen Arzt oder eine Ärztin auf oder rufen Sie sofort die Notrufnummer 112 an. `}</Text>
        <View style={styles.headerPannelsstormPannel}>
          <Image
            style={[styles.backgroundImageIcon, styles.backChildPosition]}
            contentFit="cover"
            source={require("../assets/background-image1.png")}
          />
          <View style={[styles.blur1, styles.blur1Position]} />
          <Text
            style={[
              styles.aktuellesWetterSturmContainer,
              styles.beiUnwohlseinNach1FlexBox,
            ]}
          >
            <Text
              style={[styles.aktuellesWetter, styles.aktuellesWetterTypo]}
            >{`Aktuelles Wetter:
`}</Text>
            <Text style={styles.sturm}>Sturm</Text>
          </Text>
        </View>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("MainScreen")}
        >
          <View style={[styles.backChild, styles.backChildPosition]} />
          <View style={[styles.backItem, styles.backTransform]} />
          <View style={[styles.backInner, styles.backTransform]} />
        </Pressable>
      </View>
      <Image
        style={styles.toolbardefaultIcon}
        contentFit="cover"
        source={require("../assets/toolbardefault1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blur1Position: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  beiUnwohlseinNach1FlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  backChildPosition: {
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  aktuellesWetterTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.inter,
  },
  backTransform: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    backgroundColor: Color.nabvarBlue,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  settingsbtnIcon1: {
    top: 8,
    left: 125,
    width: 29,
    height: 29,
    position: "absolute",
  },
  background1: {
    height: "80.84%",
    top: "19.16%",
    backgroundColor: Color.white,
    bottom: "0%",
    left: "0%",
    right: "0%",
  },
  beiUnwohlseinNach1: {
    height: "7.11%",
    width: "90.63%",
    top: "20.75%",
    left: "4.38%",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inter,
    fontWeight: "500",
  },
  backgroundImageIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  blur1: {
    height: "34.09%",
    top: "67.27%",
    bottom: "-1.36%",
    backgroundColor: Color.gray_100,
    left: "0%",
    right: "0%",
  },
  aktuellesWetter: {
    fontFamily: FontFamily.inter,
  },
  sturm: {
    fontWeight: "300",
    fontFamily: FontFamily.inter,
  },
  aktuellesWetterSturmContainer: {
    height: "15.15%",
    width: "89.31%",
    top: "71.97%",
    left: "5.03%",
    fontSize: FontSize.size_3xs,
  },
  headerPannelsstormPannel: {
    height: "19.16%",
    width: "99.38%",
    bottom: "80.84%",
    left: "0.63%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_xs,
    opacity: 0.6,
    backgroundColor: Color.white,
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
    height: "3.77%",
    width: "16.88%",
    top: "0.58%",
    right: "77.5%",
    bottom: "95.65%",
    left: "5.63%",
    borderRadius: Border.br_12xs,
    position: "absolute",
  },
  stormBackground: {
    top: 38,
    left: -1,
    width: 160,
    height: 689,
    position: "absolute",
  },
  toolbardefaultIcon: {
    top: 293,
    left: 0,
    width: 159,
    height: 31,
    position: "absolute",
  },
  stormScreen: {
    backgroundColor: Color.darkgray,
    flex: 1,
    height: 324,
    width: "100%",
  },
});

export default StormScreen;
