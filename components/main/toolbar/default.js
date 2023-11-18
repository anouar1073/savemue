import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"

export default function ToolbarDefault() {
  return (
    <Image
      style={styles.ToolbarDefault}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/udnmcgg8hpm-16%3A55?alt=media&token=2597b463-917e-4a63-bcb7-20ff62d32505",
      }}
    />
  )
}

const styles = StyleSheet.create({
  ToolbarDefault: {
    width: 159,
    height: 31,
  },
})
