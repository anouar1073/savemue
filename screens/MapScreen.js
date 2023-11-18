import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import NavBar from "../components/NavBar";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mapScreen}>
      <NavBar navBarPosition="absolute" navBarTop={0} navBarLeft={-1} />
      <Image
        style={styles.settingsbtnIcon1}
        contentFit="cover"
        source={require("../assets/settingsbtn.png")}
      />
      <View style={[styles.mapScreenBackground1, styles.unionIconLayout]}>
        <Image
          style={styles.unionIconLayout}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <View style={styles.backbtn}>
          <View style={styles.backbtnChild} />
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("HeatwaveScreen")}
          >
            <Text style={styles.back1}>Back</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.fountain1Parent, styles.fountain1ParentPosition]}>
        <Image
          style={styles.fountain1Icon1}
          contentFit="cover"
          source={require("../assets/fountain-1.png")}
        />
        <Text style={styles.ffentlichesTrinkwasserIn1}>
          Öffentliches Trinkwasser in Ihrer Nähe
        </Text>
      </View>
      <Image
        style={styles.toolbardefaultIcon}
        contentFit="cover"
        source={require("../assets/toolbardefault.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  unionIconLayout: {
    height: 322,
    width: 160,
  },
  fountain1ParentPosition: {
    left: 0,
    position: "absolute",
  },
  settingsbtnIcon1: {
    top: 1,
    left: 124,
    width: 29,
    height: 29,
    position: "absolute",
  },
  backbtnChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 104,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "absolute",
    width: "100%",
  },
  back1: {
    fontSize: FontSize.size_6xs,
    fontWeight: "700",
    color: "#787878",
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  back: {
    left: "24.24%",
    top: "23.56%",
    position: "absolute",
  },
  backbtn: {
    height: "5.4%",
    width: "20.63%",
    top: "2.86%",
    right: "73.13%",
    bottom: "91.74%",
    left: "6.25%",
    position: "absolute",
  },
  mapScreenBackground1: {
    top: 29,
    left: 0,
    position: "absolute",
  },
  fountain1Icon1: {
    top: 3,
    left: 7,
    width: 24,
    height: 24,
    position: "absolute",
  },
  ffentlichesTrinkwasserIn1: {
    top: 6,
    left: 39,
    fontSize: FontSize.size_5xs,
    fontWeight: "600",
    color: Color.black,
    textAlign: "center",
    width: 98,
    height: 21,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  fountain1Parent: {
    top: 265,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.white,
    width: 159,
    height: 40,
    overflow: "hidden",
  },
  toolbardefaultIcon: {
    top: 294,
    height: 31,
    width: 160,
    left: 0,
    position: "absolute",
  },
  mapScreen: {
    backgroundColor: Color.darkgray,
    flex: 1,
    height: 324,
    width: "100%",
  },
});

export default MapScreen;
