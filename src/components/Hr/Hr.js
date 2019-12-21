import React from "react";
import { View } from "react-native";
import { screenWidth } from "../../utils/dimensions";

export default Hr = props => {
  return (
    <View
      style={{
        backgroundColor: "rgba(0 ,0 ,0 ,0.1)",
        width: screenWidth - props.padding,
        height: 1,
        marginTop: 10
      }}
    />
  );
};
