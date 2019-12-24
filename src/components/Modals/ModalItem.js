import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStickyNote,
  faFolder,
  faClone,
  faTrashAlt
} from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faBoxOpen,
  faFileImport,
  faFileExport
} from "@fortawesome/free-solid-svg-icons";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

export default ModalItem = props => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
  };

  return (
    <TouchableOpacity
      style={{ flexDirection: "row", paddingVertical: 7.5 }}
      onPress={() => {
        props.item.function(), Haptics.selectionAsync();
      }}
    >
      <View
        style={
          props.item.icon !== "file" ? { marginTop: -1 } : { marginTop: 2 }
        }
      >
        {props.item.icon !== "file" ? (
          <Feather
            name={props.item.icon}
            color={
              props.item.title === "Delete" ? "red" : props.theme.fontColor
            }
            size={23}
          />
        ) : (
          <FontAwesomeIcon
            icon={faStickyNote}
            color={props.theme.fontColor}
            size={20}
          />
        )}
      </View>
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <Text
          style={{
            fontFamily: "sf-text-regular",
            fontSize: 19,
            color: props.item.title === "Delete" ? "red" : props.theme.fontColor
          }}
        >
          {props.item.title}
        </Text>
        {!props.last ? (
          <View
            style={{
              backgroundColor: "rgba(0 ,0 ,0 ,0.1)",
              width: 1000,
              height: 1,
              marginTop: 15
            }}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
