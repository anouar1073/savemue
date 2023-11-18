import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function InfoPanelsRainyPannel() {
  return (
    <View style={styles.InfoPanelsRainyPannel}>
      <View style={styles.Group716}>
        <Image
          style={styles.Rainy1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/d8o9qpqh6xq-25%3A1295?alt=media&token=dc0324fa-9b34-43c2-8e0c-7cd5e5a95912",
          }}
        />
        <Text style={styles.Starkregen}>Starkregen</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  InfoPanelsRainyPannel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 141,
    height: 44,
    paddingLeft: 12,
    paddingRight: 22,
    paddingTop: 11,
    paddingBottom: 9,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(209,236,255,1)",
  },
  Group716: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    boxSizing: "border-box",
  },
  Rainy1: {
    width: 27,
    height: "100%",
  },
  Starkregen: {
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
