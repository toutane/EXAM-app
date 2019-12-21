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

export default ModalItem = props => {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", paddingVertical: 7.5 }}
      onPress={() => props.item.function()}
    >
      <View style={{ margin: 1 }}>
        <FontAwesomeIcon
          icon={
            props.item.title === "QuickNote"
              ? faStickyNote
              : props.item.title === "Book"
              ? faBook
              : props.item.title === "Folder"
              ? faFolder
              : props.item.title === "Duplicate"
              ? faClone
              : props.item.title === "Move"
              ? faBoxOpen
              : props.item.title === "Export all"
              ? faFileExport
              : props.item.title === "Delete"
              ? faTrashAlt
              : faFileImport
          }
          color={props.item.title === "Delete" ? "red" : props.theme.fontColor}
          size={20}
        />
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
