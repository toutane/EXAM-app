import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { ThemeContext } from "../contexts/theme-context";
export default Settings = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.backgroundColor
      }}
    >
      <Text
        style={{
          fontFamily: "sf-display-bold",
          fontSize: 34,
          color: theme.fontColor
        }}
      >
        Settings
      </Text>
    </View>
  );
};
