import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Navbar() {
  return (
    <View style={styles.Navbar}>
      <Text style={styles.Savemue}>SaveMue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Navbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 160,
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
})
