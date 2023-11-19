const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./screens/MainScreen";
import DropDownButton from "./components/DropDownButton";
import ToolbarPanic from "./components/ToolbarPanic";
import PanicScreenBackground from "./components/PanicScreeenBackground";
import NavBar from "./components/NavBar";
import PanicScreen from "./screens/PanicScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StormScreen from "./screens/StormScreen";
import HeatwaveScreen from "./screens/HeatwaveScreen";
import MapScreen from "./screens/MapScreen";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  let [fontsLoaded] = useFonts({
    Inter: Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PanicScreen"
              component={PanicScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsScreen"
              component={SettingsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StormScreen"
              component={StormScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HeatwaveScreen"
              component={HeatwaveScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
