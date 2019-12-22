import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import BottomInputModal from "../../../Modals/BottomInputModal";

export default NoteCardItem = props => {
  return (
    <View>
      <View style={{ alignItems: "center", marginLeft: 30 }}>
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
        <TouchableOpacity
          style={{ paddingVertical: 7 }}
          onPress={() => props.setIsOptionsVisible(true)}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "sf-text-regular",
                fontSize: 18,
                color: props.theme.blue
              }}
            >
              {props.item.title}
            </Text>
            <FontAwesomeIcon
              icon={faAngleDown}
              color={props.theme.blue}
              size={12}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            top: -6,
            fontSize: 12,
            fontFamily: "sf-text-regular",
            color: props.theme.gray
          }}
        >
          aujourd'hui
        </Text>
      </View>
      <BottomInputModal
        {...props}
        isVisible={props.isOptionsVisible}
        setIsVisible={props.setIsOptionsVisible}
        content={[
          { title: "Input", function: e => console.log(e) },
          { title: "Duplicate", function: () => alert("Duplicated") },
          { title: "Move", function: () => alert("Moved") },
          { title: "Export all", function: () => alert("Expoted") },
          { title: "Delete", function: () => alert("Deleted") },
          { title: "Cancel" }
        ]}
      />
    </View>
  );
};
