import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function InfoPanelsStarkesGewitter() {
  return (
    <View style={styles.InfoPanelsStarkesGewitter}>
      <View style={styles.Group725}>
        <Image
          style={styles.Storm1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/sfafb8zmmuj-21%3A845?alt=media&token=607d897c-4517-41c5-bae5-0d74eb135451",
          }}
        />
        <Text style={styles.StarkesGewitter}>Starkes Gewitter</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  InfoPanelsStarkesGewitter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 141,
    height: 44,
    paddingLeft: 13,
    paddingRight: 25,
    paddingTop: 8,
    paddingBottom: 10,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(190,186,207,1)",
  },
  Group725: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    boxSizing: "border-box",
  },
  Storm1: {
    width: 26,
    height: "100%",
  },
  StarkesGewitter: {
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
