import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function InfoPanelsSunnyPannel() {
  return (
    <View style={styles.InfoPanelsSunnyPannel}>
      <View style={styles.Group572}>
        <Image
          style={styles.HeatWave1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8smagsfmikf-16%3A635?alt=media&token=e281938f-8230-4995-9955-e758c55b8a2d",
          }}
        />
        <Text style={styles.Hitze}> Hitze</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  InfoPanelsSunnyPannel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 141,
    height: 41,
    paddingLeft: 13,
    paddingRight: 36,
    paddingTop: 8,
    paddingBottom: 9,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(253,219,188,1)",
  },
  Group572: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
  },
  HeatWave1: {
    width: 25,
    height: "100%",
  },
  Hitze: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "11px",
    lineHeight: "11px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
})
