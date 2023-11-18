import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"

export default function Settingsbtn() {
  return (
    <Image
      style={styles.Settingsbtn}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/5noy8rb6f9r-3%3A162?alt=media&token=87378316-e7f3-4889-8c2d-69a07466ecbe",
      }}
    />
  )
}

const styles = StyleSheet.create({
  Settingsbtn: {
    width: 25,
    height: 28,
  },
})
