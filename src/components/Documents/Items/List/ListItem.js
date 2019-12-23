import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { screenWidth } from "../../../../utils/dimensions";

const moment = require("moment");

import BottomInputModal from "../../../Modals/BottomInputModal";
import BookItem from "./BookItem";
import NoteItem from "./NoteItem";

export default ListItem = props => {
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
            {props.item.type === "note" ? (
              <NoteItem {...props} />
            ) : (
              <BookItem {...props} />
            )}
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
                {moment(props.item.creation_date)
                  .startOf("min")
                  .fromNow()}{" "}
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
        content="itemContent"
      />
    </View>
  );
};
