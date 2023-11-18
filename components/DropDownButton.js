import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DropDownButton = ({
  dimensions,
  imageDimensions,
  dropDownButtonPosition,
  dropDownButtonWidth,
  dropDownButtonHeight,
  dropDownButtonTop,
  dropDownButtonRight,
  dropDownButtonBottom,
  dropDownButtonLeft,
  rectangleIconHeight,
  rectangleIconWidth,
  rectangleIconRight,
  rectangleIconBottom,
  arrowIconHeight,
  arrowIconWidth,
  arrowIconTop,
  arrowIconRight,
  arrowIconBottom,
  arrowIconLeft,
  symptomeHeight,
  symptomeWidth,
  symptomeTop,
  symptomeLeft,
}) => {
  const dropDownButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dropDownButtonPosition),
      ...getStyleValue("width", dropDownButtonWidth),
      ...getStyleValue("height", dropDownButtonHeight),
      ...getStyleValue("top", dropDownButtonTop),
      ...getStyleValue("right", dropDownButtonRight),
      ...getStyleValue("bottom", dropDownButtonBottom),
      ...getStyleValue("left", dropDownButtonLeft),
    };
  }, [
    dropDownButtonPosition,
    dropDownButtonWidth,
    dropDownButtonHeight,
    dropDownButtonTop,
    dropDownButtonRight,
    dropDownButtonBottom,
    dropDownButtonLeft,
  ]);

  const rectangleIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", rectangleIconHeight),
      ...getStyleValue("width", rectangleIconWidth),
      ...getStyleValue("right", rectangleIconRight),
      ...getStyleValue("bottom", rectangleIconBottom),
    };
  }, [
    rectangleIconHeight,
    rectangleIconWidth,
    rectangleIconRight,
    rectangleIconBottom,
  ]);

  const arrowIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", arrowIconHeight),
      ...getStyleValue("width", arrowIconWidth),
      ...getStyleValue("top", arrowIconTop),
      ...getStyleValue("right", arrowIconRight),
      ...getStyleValue("bottom", arrowIconBottom),
      ...getStyleValue("left", arrowIconLeft),
    };
  }, [
    arrowIconHeight,
    arrowIconWidth,
    arrowIconTop,
    arrowIconRight,
    arrowIconBottom,
    arrowIconLeft,
  ]);

  const symptomeStyle = useMemo(() => {
    return {
      ...getStyleValue("height", symptomeHeight),
      ...getStyleValue("width", symptomeWidth),
      ...getStyleValue("top", symptomeTop),
      ...getStyleValue("left", symptomeLeft),
    };
  }, [symptomeHeight, symptomeWidth, symptomeTop, symptomeLeft]);

  return (
    <View style={[styles.dropdownbutton, dropDownButtonStyle]}>
      <Image
        style={[
          styles.dropdownbuttonChild,
          styles.dropdownbuttonLayout,
          rectangleIconStyle,
        ]}
        contentFit="cover"
        source={dimensions}
      />
      <Image
        style={[
          styles.dropdownbuttonItem,
          styles.dropdownbuttonLayout,
          arrowIconStyle,
        ]}
        contentFit="cover"
        source={imageDimensions}
      />
      <Text style={[styles.symptome, symptomeStyle]}>Symptome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownbuttonLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  dropdownbuttonChild: {
    height: "82.5%",
    width: "87.38%",
    top: "0%",
    right: "12.62%",
    bottom: "17.5%",
    left: "0%",
    borderRadius: Border.br_2xs,
  },
  dropdownbuttonItem: {
    height: "26.25%",
    width: "12.13%",
    top: "30%",
    right: "79.67%",
    bottom: "43.75%",
    left: "8.2%",
  },
  symptome: {
    height: "35%",
    width: "52.46%",
    top: "29.38%",
    left: "23.77%",
    fontSize: FontSize.size_7xs,
    fontWeight: "500",
    fontFamily: FontFamily.inter,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  dropdownbutton: {
    width: 61,
    height: 16,
  },
});

export default DropDownButton;
