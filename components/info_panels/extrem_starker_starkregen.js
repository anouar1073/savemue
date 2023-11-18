import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function InfoPanelsVeryRainyPannel() {
  return (
    <View style={styles.InfoPanelsVeryRainyPannel}>
      <View style={styles.Group264}>
        <Image
          style={styles.Rain1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/b07yj2hca05-25%3A1296?alt=media&token=1fe08bc2-8368-49fc-81b6-54872d27eaeb",
          }}
        />
        <Text style={styles.ExtremStarkerStarkre}>
          Extrem starker Starkregen
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  InfoPanelsVeryRainyPannel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 141,
    height: 44,
    paddingLeft: 11,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 9,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(123,182,225,1)",
  },
  Group264: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Rain1: {
    width: 30,
    height: "100%",
  },
  ExtremStarkerStarkre: {
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
