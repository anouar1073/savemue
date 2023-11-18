import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function InfoPanelsGlatteisPannel() {
  return (
    <View style={styles.InfoPanelsGlatteisPannel}>
      <View style={styles.Group486}>
        <Image
          style={styles.IceCube1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/enzb5b3wua5-25%3A1578?alt=media&token=0b3cb7f5-ab61-4e88-9626-91e87336829a",
          }}
        />
        <Text style={styles.Glatteis}>Glatteis</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  InfoPanelsGlatteisPannel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 141,
    height: 41,
    paddingLeft: 13,
    paddingRight: 26,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(237,254,255,1)",
  },
  Group486: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
  },
  IceCube1: {
    width: 29,
    height: "100%",
  },
  Glatteis: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "11px",
    lineHeight: "11px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
})
