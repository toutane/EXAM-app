import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { screenWidth } from "../../../utils/dimensions";
import * as Haptics from "expo-haptics";

export default ViewMode = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        right: screenWidth - 485,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        height: 25,
        width: 25,
        backgroundColor:
          props.viewMode === "Card"
            ? props.theme.backgroundColor
            : props.theme.blue
      }}
      onPress={() => {
        props.setViewMode(prevData => (prevData === "List" ? "Card" : "List")),
          Haptics.selectionAsync();
      }}
    >
      <FontAwesomeIcon
        size={17}
        icon={faList}
        color={
          props.viewMode === "List"
            ? props.theme.backgroundColor
            : props.theme.blue
        }
      />
    </TouchableOpacity>
  );
};
