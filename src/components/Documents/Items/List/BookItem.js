import React from "react";
import { TouchableOpacity } from "react-native";

export default BookItem = props => {
  return (
    <TouchableOpacity
      onPress={() => alert("card pressed")}
      style={{
        height: 65,
        width: 50,
        backgroundColor: props.item.color,
        borderRadius: 8,
        shadowOpacity: 0.1,
        shadowRadius: "4px",
        shadowColor: props.theme.fontColor
      }}
    />
  );
};
