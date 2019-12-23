import React from "react";
import { TouchableOpacity } from "react-native";

export default NoteItem = props => {
  return (
    <TouchableOpacity
      onPress={() => alert("card pressed")}
      style={{
        marginLeft: 2.5,
        height: 45,
        width: 45,
        backgroundColor: props.item.color,
        borderRadius: 8,
        shadowOpacity: 0.1,
        shadowRadius: "4px",
        shadowColor: props.theme.fontColor
      }}
    />
  );
};
