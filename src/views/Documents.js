import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { ThemeContext } from "../contexts/theme-context";

export default Documents = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

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
          color: theme.fontColor,
          fontSize: 74,
          fontFamily: "sf-display-bold"
        }}
      >
        👋 Hey !
      </Text>
      <Button title="switch theme" onPress={() => switchTheme()}></Button>
    </View>
  );
};
