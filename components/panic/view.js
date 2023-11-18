import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function PanicScreen() {
  return (
    <View style={styles.PanicScreen}>
      <View style={styles.Navbar}>
        <Text style={styles.Savemue}>SaveMue</Text>
      </View>
      <View style={styles.Panic_screeen_background}>
        <Text style={styles.NotfallModus}>Notfall Modus</Text>
        <View style={styles._110}>
          <Image
            style={styles.Policeman1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2fkil2v1eo4-I16%3A478%3B25%3A3709?alt=media&token=9960cf42-11c8-4cbe-a2b9-1cd498450511",
            }}
          />
          <View style={styles.Group963}>
            <Text style={styles.WHle110}>Wähle 110</Text>
          </View>
        </View>
        <View style={styles._112}>
          <Image
            style={styles.Ambulance1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2fkil2v1eo4-I16%3A478%3B25%3A3731?alt=media&token=f7897d64-d28e-4fd0-a844-c5cc5d103f9d",
            }}
          />
          <View style={styles.Group1010}>
            <Text style={styles.WHle112}>Wähle 112</Text>
          </View>
        </View>
      </View>
      <View style={styles.ToolbarPanic}>
        <View style={styles.QuitBtn}>
          <Text style={styles.Quit}>Quit</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  PanicScreen: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 159,
    height: 324,
    boxSizing: "border-box",
    backgroundColor: "rgba(170,164,164,0.5)",
  },
  Navbar: {
    position: "absolute",
    left: -1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 38,
    paddingLeft: 14,
    paddingRight: 100,
    paddingTop: 12,
    paddingBottom: 16,
    boxSizing: "border-box",
    backgroundColor: "rgba(96,76,213,1)",
  },
  Savemue: {
    color: "rgba(255,255,255,1)",
    fontSize: "10px",
    lineHeight: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
  },
  Panic_screeen_background: {
    position: "absolute",
    top: 27,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 340,
    paddingLeft: 20,
    paddingRight: 19,
    paddingTop: 18,
    paddingBottom: 104,
    borderRadius: 15,
    boxSizing: "border-box",
    backgroundColor: "undefined",
  },
  NotfallModus: {
    color: "rgba(0,0,0,1)",
    fontSize: "14px",
    lineHeight: "14px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
  },
  _110: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingBottom: 0.42,
    boxSizing: "border-box",
  },
  Policeman1: {
    width: 39,
    height: 41,
  },
  Group963: {
    width: "100%",
    height: 39.88,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 16,
    paddingBottom: 13.88,
    borderRadius: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(181,193,255,1)",
  },
  WHle110: {
    color: "rgba(0,0,0,1)",
    fontSize: "10px",
    lineHeight: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
  },
  _112: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingBottom: 0.11,
    boxSizing: "border-box",
  },
  Ambulance1: {
    width: 42,
    height: 37,
  },
  Group1010: {
    width: "100%",
    height: 39.88,
    paddingLeft: 35,
    paddingRight: 36,
    paddingTop: 16,
    paddingBottom: 13.88,
    borderRadius: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(201,255,216,1)",
  },
  WHle112: {
    color: "rgba(0,0,0,1)",
    fontSize: "10px",
    lineHeight: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
  },
  ToolbarPanic: {
    position: "absolute",
    top: 293,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 31,
    paddingLeft: 61,
    paddingRight: 62,
    paddingTop: 7,
    paddingBottom: 9,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  QuitBtn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
    paddingLeft: 10,
    paddingRight: 9,
    paddingTop: 3,
    paddingBottom: 4.49,
    borderRadius: 11,
    boxSizing: "border-box",
    backgroundColor: "undefined",
  },
  Quit: {
    color: "rgba(255,255,255,1)",
    fontSize: "8px",
    lineHeight: "8px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
})
