import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Panic_screeen_background() {
  return (
    <View style={styles.Panic_screeen_background}>
      <View style={styles.Group969}>
        <Text style={styles.NotfallModus}>Notfall Modus</Text>
        <View style={styles._110}>
          <Image
            style={styles.Policeman1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0ktkwa3vu08-25%3A3709?alt=media&token=cae7b488-08b5-4667-b884-2a1897d3f4e7",
            }}
          />
          <View style={styles.Group888}>
            <Text style={styles.WHle110}>Wähle 110</Text>
          </View>
        </View>
        <View style={styles._112}>
          <Image
            style={styles.Ambulance1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0ktkwa3vu08-25%3A3731?alt=media&token=5bd3ada9-09b5-4226-be50-3c6c43dd8f8c",
            }}
          />
          <View style={styles.Group253}>
            <Text style={styles.WHle112}>Wähle 112</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Panic_screeen_background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 160,
    height: 324,
    paddingLeft: 20,
    paddingRight: 19,
    paddingTop: 17,
    paddingBottom: 99,
    borderRadius: 15,
    boxSizing: "border-box",
    backgroundColor: "undefined",
  },
  Group969: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
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
    boxSizing: "border-box",
  },
  Policeman1: {
    width: 39,
    height: 41,
  },
  Group888: {
    width: "100%",
    height: 38,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 15,
    paddingBottom: 13,
    borderRadius: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(153,165,226,1)",
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
    boxSizing: "border-box",
  },
  Ambulance1: {
    width: 42,
    height: 37,
  },
  Group253: {
    width: "100%",
    height: 38,
    paddingLeft: 35,
    paddingRight: 36,
    paddingTop: 15,
    paddingBottom: 13,
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
})
