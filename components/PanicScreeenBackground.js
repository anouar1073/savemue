import React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

import call from "react-native-phone-call";
import { Background } from "@react-navigation/elements";

const PanicScreenBackground = () => {
  return (
    <View style={styles.panicScreenBackground}>
      <Background
        style={styles.background}
        source={require("../assets/background1.png")}
      />
      <Text style={styles.notfallModus}>Notfall Modus</Text>
      <View style={styles.view}>
        <Image
          style={styles.pictogramIcon}
          source={require("../assets/policeman.png")}
        />
        <View style={[styles.button1, styles.buttonShadowBox]}>
          <Pressable
            style={styles.pressable}
            onPress={() =>
              call({ number: "110", skipCanOpen: true }).catch(console.error)
            }
          >
            <Text style={styles.text}>Wähle 110</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.view}>
        <Image
          style={styles.pictogramIcon}
          source={require("../assets/ambulance.png")}
        />
        <View style={[styles.button2, styles.buttonShadowBox]}>
          <Pressable
            style={styles.pressable}
            onPress={() =>
              call({ number: "112", skipCanOpen: true }).catch(console.error)
            }
          >
            <Text style={styles.text}>Wähle 112</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    width: "75%",
    height: "25%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: "10%",
  },
  text: {
    fontWeight: "700",
    fontSize: FontSize.size_m,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inter,
  },
  pictogramIcon: {
    width: 100,
    height: 100,
  },
  background: {
    height: "100%",
    borderRadius: Border.br_mini,
    overflow: "hidden",
    width: "100%",
    position: "absolute",
  },
  buttonShadowBox: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    width: "100%",
    height: "50%",
  },
  button1: {
    backgroundColor: "#99a5e2",
  },
  button2: {
    backgroundColor: Color.honeydew,
  },
  notfallModus: {
    fontSize: FontSize.size_l,
    fontWeight: "600",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inter,
  },
  pressable: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  panicScreenBackground: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "20%",
    width: "100%",
    height: "110%",
  },
});

export default PanicScreenBackground;
