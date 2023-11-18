import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function InfoPanelsWindyPannel() {
  return (
    <View style={styles.InfoPanelsWindyPannel}>
      <View style={styles.Group593}>
        <Image
          style={styles.Wind1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/cdyjhkpmusk-25%3A2410?alt=media&token=1d9599de-78d2-4539-b700-2b499d4708e4",
          }}
        />
        <Text style={styles.SchwereStrumbEn}>Schwere Strumböen</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  InfoPanelsWindyPannel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 141,
    height: 44,
    paddingLeft: 11,
    paddingRight: 18,
    paddingTop: 7,
    paddingBottom: 9,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group593: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    boxSizing: "border-box",
  },
  Wind1: {
    width: 30,
    height: "100%",
  },
  SchwereStrumbEn: {
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
