import React from "react";
import { TouchableOpacity } from "react-native";

export default NoteItem = props => {
  return (
    <TouchableOpacity
      onPress={() => alert("card pressed")}
      style={{
        marginLeft: 5,
        marginTop: 70,
        height: 90,
        width: 90,
        backgroundColor: props.item.color,
        borderRadius: 8,
        shadowOpacity: 0.1,
        shadowRadius: "4px",
        shadowColor: props.theme.fontColor
      }}
    />
  );
};
