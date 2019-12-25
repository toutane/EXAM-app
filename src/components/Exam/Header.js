import React, { useState, useContext, useEffect } from "react";
import { View, Animated, TouchableOpacity } from "react-native";
import { Button, Icon, Text } from "native-base";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../../contexts/theme-context";
import { screenWidth } from "../../utils/dimensions";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import InfoModal from "../Modals/InfoModal";

export default Header = props => {
  const { theme } = useContext(ThemeContext);
  _getHeaderOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 30, 60, 100],
      outputRange: [0, 0, 1, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getHeaderBlackOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 35, 50, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getTitleOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 32, 33, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getHeaderTitleOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 12, 70, 100],
      outputRange: [0, 0, 1, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  const headerOpacity = _getHeaderOpacity();
  const headerBlackOpacity = _getHeaderBlackOpacity();
  const titleOpacity = _getTitleOpacity();
  const headerTitleOpacity = _getHeaderTitleOpacity();
  return (
    <View style={{ zIndex: 100, position: "absolute" }}>
      <Animated.View
        style={{
          zIndex: 10,
          position: "absolute",
          top: 0,
          opacity: headerOpacity
        }}
      >
        <BlurView
          tint={theme.theme}
          intensity={100}
          style={{
            zIndex: 8,
            height: 100,
            width: screenWidth
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          zIndex: 9,
          height: 100,
          width: screenWidth,
          backgroundColor: theme.backgroundColor,
          position: "absolute",
          top: 0,
          opacity: headerBlackOpacity
        }}
      />
      {props.backBtn && (
        <View style={{ zIndex: 999, position: "absolute", top: 43 }}>
          <Button
            transparent
            onPress={() => props.navigation.navigate(props.backHeader)}
          >
            <Icon
              style={{ marginRight: 0, color: theme.blue }}
              name="arrow-back"
            />
            <Text style={{ right: 10, color: theme.blue }}>
              {props.backHeader}
            </Text>
          </Button>
        </View>
      )}
      <View
        style={{
          zIndex: 20,
          height: 100,
          width: screenWidth,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 15,
          flexDirection: "row"
        }}
      >
        <Animated.Text
          style={{
            fontSize: 17,
            // left: 15,
            fontFamily: "sf-text-semibold",
            color: theme.fontColor,
            opacity: headerTitleOpacity
          }}
        >
          {props.header}
        </Animated.Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: "absolute",
            right: 15,
            alignItems: "center",
            justifyContent: "center",
            height: 25,
            width: 25,
            backgroundColor: "transparent"
          }}
          onPress={() => {
            props.setIsOptionsVisible(true), Haptics.selectionAsync();
          }}
        >
          <Feather name="more-horizontal" size={23} color={theme.blue} />
        </TouchableOpacity>
      </View>
      {props.createBtn && (
        <View style={{ zIndex: 999, position: "absolute", top: 43 }}>
          <Button
            transparent
            onPress={() => props.navigation.navigate(props.backHeader)}
          >
            <Ionicons
              style={{ left: screenWidth - 50 }}
              name="ios-add-circle-outline"
              size={35}
              color={theme.blue}
              onPress={() => props.createFct()}
            />
          </Button>
        </View>
      )}
      <InfoModal
        {...props}
        isVisible={props.isOptionsVisible}
        setIsVisible={props.setIsOptionsVisible}
        content="itemContent"
      />
    </View>
  );
};
