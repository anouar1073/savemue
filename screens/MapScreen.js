import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import NavBar from "../components/NavBar";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import ToolbarDefaultIcon from "../components/ToolbarDefaultIcon";

const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mapScreen}>
      <NavBar navBarPosition="absolute" navBarTop={0} navBarLeft={-1} />

      
      <View style={styles.backbtn}>
          <View style={styles.backbtnChild} />
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("HeatwaveScreen")}
          >
          <Image
          style={styles.previousIcon}
          source={require("../assets/previous.png")}
        />
          </Pressable>
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

      <View style={[styles.mapScreenBackground1, styles.unionIconLayout]}>
        <Image
          style={styles.unionIconLayout}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
      </View>

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
  unionIconLayout: {
    height: 400,
    width: "100%",
  },
  previousIcon: {
    width: 40,
    height: 40,
    contentFit: "cover",
    position: "absolute",
    top: 115,
    left: 17,
  },
  settingsbtnLayout: {
    top: "5%",
    right: "5%",
    height: 60,
    width: 60,
    position: "absolute",
    zIndex: 4,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  fountain1ParentPosition: {
    left: 0,
    position: "absolute",
  },
  backbtnChild: {
    height: "100%",
    top: "200%",
    left: "40%",
    borderRadius: 10,
    backgroundColor: "white",
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
    height: 60,
    width: 60,
    position: "absolute",
    zIndex: 4,
  },
  mapScreenBackground1: {
    top: "50%",
    left: 0,
  },
  fountain1Icon1: {
    top: "40%",
    left: "40%",
    width: 70,
    height: 70,
    position: "absolute",
  },
  ffentlichesTrinkwasserIn1: {
    top: "20%",
    left: 39,
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
    color: Color.black,
    textAlign: "center",
    width: "80%",
    height: "20%",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  fountain1Parent: {
    top: 100,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.white,
    width: "100%",
    height: "50%",
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
