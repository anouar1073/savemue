import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Map from "./Map";

export default function App() {
  return <Map emergencyType={0} height={400} width={400}></Map>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
