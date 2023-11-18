import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function ToolbarPanic() {
  return (
    <View style={styles.ToolbarPanic}>
      <View style={styles.QuitBtn}>
        <Text style={styles.Quit}>Quit</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ToolbarPanic: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 159,
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
