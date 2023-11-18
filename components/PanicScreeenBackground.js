import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType, Pressable } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

import call from 'react-native-phone-call'

const args = {
  number: '9093900003', // String value with the number to call
  skipCanOpen: true // Skip the canOpenURL check
}

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PanicScreeenBackground = ({
  imageDimensions,
  panicScreeenBackgroundHeight,
  panicScreeenBackgroundMarginTop,
  backgroundIconRight,
  backgroundIconLeft,
  iconTop,
  notfallModusTop,
  viewHeight,
  viewTop,
  backgroundHeight,
  backgroundTop,
  backgroundBackgroundColor,
  whle110Top,
  viewHeight1,
  viewTop1,
  backgroundHeight1,
  backgroundTop1,
  whle112Top,
}) => {
  const panicScreeenBackgroundStyle = useMemo(() => {
    return {
      ...getStyleValue("height", panicScreeenBackgroundHeight),
      ...getStyleValue("marginTop", panicScreeenBackgroundMarginTop),
    };
  }, [panicScreeenBackgroundHeight, panicScreeenBackgroundMarginTop]);

  const backgroundIconStyle = useMemo(() => {
    return {
      ...getStyleValue("right", backgroundIconRight),
      ...getStyleValue("left", backgroundIconLeft),
    };
  }, [backgroundIconRight, backgroundIconLeft]);

  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", iconTop),
    };
  }, [iconTop]);

  const notfallModusStyle = useMemo(() => {
    return {
      ...getStyleValue("top", notfallModusTop),
    };
  }, [notfallModusTop]);

  const viewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", viewHeight),
      ...getStyleValue("top", viewTop),
    };
  }, [viewHeight, viewTop]);

  const backgroundStyle = useMemo(() => {
    return {
      ...getStyleValue("height", backgroundHeight),
      ...getStyleValue("top", backgroundTop),
      ...getStyleValue("backgroundColor", backgroundBackgroundColor),
    };
  }, [backgroundHeight, backgroundTop, backgroundBackgroundColor]);

  const whle110Style = useMemo(() => {
    return {
      ...getStyleValue("top", whle110Top),
    };
  }, [whle110Top]);

  const view1Style = useMemo(() => {
    return {
      ...getStyleValue("height", viewHeight1),
      ...getStyleValue("top", viewTop1),
    };
  }, [viewHeight1, viewTop1]);

  const background1Style = useMemo(() => {
    return {
      ...getStyleValue("height", backgroundHeight1),
      ...getStyleValue("top", backgroundTop1),
    };
  }, [backgroundHeight1, backgroundTop1]);

  const whle112Style = useMemo(() => {
    return {
      ...getStyleValue("top", whle112Top),
    };
  }, [whle112Top]);

  return (
    <View style={[styles.panicScreeenBackground, panicScreeenBackgroundStyle]}>
      <Image
        style={[styles.backgroundIcon, backgroundIconStyle]}
        contentFit="cover"
        source={imageDimensions}
      />
      <View style={[styles.icon1, iconStyle]} />
      <Text style={[styles.notfallModus, notfallModusStyle]}>
        Notfall Modus
      </Text>
      <View style={[styles.view, styles.viewPosition, viewStyle]}>
        <View
          style={[
            styles.background2,
            styles.backgroundShadowBox,
            backgroundStyle,
          ]}
        />
        <Pressable style={[styles.whle110, whle110Style]} onPress={() => call({number: '110', skipCanOpen: true}).catch(console.error)}>
          <Text style={styles.whleTypo}>
            Wähle 110
          </Text>
        </Pressable>
 
        <Image
            style={[styles.policeman1Icon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/policeman-1.png")}
          />
      </View>
      <View style={[styles.view1, styles.viewPosition, view1Style]}>
        <View
          style={[
            styles.background3,
            styles.backgroundShadowBox,
            background1Style,
          ]}
        />
        <Pressable style={[styles.whle112, whle112Style]} onPress={() => call({number: '112', skipCanOpen: true}).catch(console.error)}>
          <Text style={styles.whleTypo}>
            Wähle 112
          </Text>
        </Pressable>
        <Image
          style={[styles.ambulance1Icon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ambulance-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    left: "12.5%",
    right: "11.88%",
    width: "75.63%",
    position: "absolute",
  },
  backgroundShadowBox: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  whleTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    left: "28.93%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  backgroundIcon: {
    height: "100%",
    top: "0%",
    borderRadius: Border.br_mini,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  icon1: {
    height: "12.35%",
    width: "26.25%",
    top: "64.51%",
    right: "35.63%",
    bottom: "23.15%",
    left: "38.13%",
    position: "absolute",
  },
  notfallModus: {
    top: "5.25%",
    left: "23.13%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  background2: {
    height: "46.34%",
    top: "53.66%",
    backgroundColor: "#99a5e2",
  },
  whle110: {
    top: "71.95%",
  },
  policeman1Icon1: {
    left: 41,
    width: 39,
    height: 41,
  },
  view: {
    height: "25.31%",
    top: "14.81%",
    bottom: "59.88%",
  },
  background3: {
    height: "48.1%",
    top: "51.9%",
    backgroundColor: Color.honeydew,
  },
  whle112: {
    top: "70.89%",
  },
  ambulance1Icon1: {
    left: 37,
    width: 42,
    height: 37,
  },
  view1: {
    height: "24.38%",
    top: "45.06%",
    bottom: "30.56%",
  },
  panicScreeenBackground: {
    width: "100%",
    height: 324,
  },
});

export default PanicScreeenBackground;
