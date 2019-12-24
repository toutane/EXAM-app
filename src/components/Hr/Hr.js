import React, { useContext } from "react";
import { View } from "react-native";
import { screenWidth } from "../../utils/dimensions";

import { ThemeContext } from "../../contexts/theme-context";

export default Hr = props => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: theme.hr,
        width: screenWidth - props.padding,
        height: 1,
        marginTop: 10
      }}
    />
  );
};
