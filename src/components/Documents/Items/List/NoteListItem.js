import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { screenWidth } from "../../../../utils/dimensions";

import BottomInputModal from "../../../Modals/BottomInputModal";

export default NoteListItem = props => {
  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            paddaingHorizontal: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            <View
              style={{
                flexDirection: "column",
                marginLeft: 15,
                marginTop: 8
              }}
            >
              <Text
                style={{
                  fontFamily: "sf-text-regular",
                  fontSize: 18,
                  color: props.theme.blue,
                  marginBottom: 8
                }}
              >
                {props.item.title}
              </Text>
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
          </View>
          <TouchableOpacity
            onPress={() => props.setIsOptionsVisible(true)}
            style={{ marginRight: 10 }}
          >
            <FontAwesomeIcon
              icon={faAngleDown}
              color={props.theme.blue}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0 ,0 ,0 ,0.1)",
            width: screenWidth - 30,
            height: 1,
            marginTop: 10
          }}
        />
      </TouchableOpacity>
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
