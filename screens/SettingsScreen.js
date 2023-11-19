import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import NavBar from "../components/NavBar";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import ToolbarDefaultIcon from "../components/ToolbarDefaultIcon";
import settingsButtonStyles from "../style/settings_button";

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsScreen}>
      <NavBar navBarPosition="absolute" navBarTop={0} navBarLeft={-1} />

      <View
        style={[
          styles.settingsScreeenBackground,
          styles.toolbardefaultIconPosition,
        ]}
      >
        <View style={[styles.background2, styles.background2Position]} />
        <Text style={[styles.justSomeUseful1, styles.back1Typo]}>
          Just some useful settings for your app
        </Text>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("MainScreen")}
        >
          <Text style={[styles.back1, styles.back1Typo]}>Back</Text>
        </Pressable>
      </View>

      <Pressable
        style={[settingsButtonStyles.settingsbtnLayout]}
        onPress={() => navigation.navigate("MainScreen")}
      >
        <Image
          style={settingsButtonStyles.icon}
          contentFit="cover"
          source={require("../assets/settingsbtn.png")}
        />
      </Pressable>
      <ToolbarDefaultIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  toolbardefaultIconPosition: {
    width: "100%",
    left: 0,
    position: "absolute",
  },
  backgroundPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  background2Position: {
    top: "10.16%",
    position: "absolute",
  },
  back1Typo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.inter,
  },
  backgroundIcon: {
    height: "14.6%",
    top: "0%",
    bottom: "85.4%",
    borderRadius: Border.br_mini,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  background2: {
    height: "89.84%",
    bottom: "0%",
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  justSomeUseful1: {
    width: "68.75%",
    left: "15.63%",
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
    top: "15%",
    position: "absolute",
  },
  back1: {
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
  },
  back: {
    left: "8.13%",
    top: "2.86%",
    position: "absolute",
  },
  settingsScreeenBackground: {
    top: 10,
    height: "100%",
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
  settingsScreen: {
    backgroundColor: Color.darkgray,
    flex: 1,
    height: 324,
    width: "100%",
  },
});

export default SettingsScreen;
