import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";

const moment = require("moment");

import BottomInputModal from "../../../Modals/BottomInputModal";
import BookItem from "./BookItem";
import NoteItem from "./NoteItem";

export default CardItem = props => {
  return (
    <View>
      <View style={{ alignItems: "center", marginLeft: 30 }}>
        {props.item.type === "exam" ? (
          <NoteItem {...props} />
        ) : (
          <BookItem {...props} />
        )}
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
              {props.item.title.length >= 6
                ? props.item.title.slice(0, 6) + "..."
                : props.item.title}
            </Text>
            <Feather name="chevron-down" color={props.theme.blue} size={14} />
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
          {moment(props.item.creation_date)
            .startOf("min")
            .fromNow()}
        </Text>
      </View>
      <BottomInputModal
        {...props}
        isVisible={props.isOptionsVisible}
        setIsVisible={props.setIsOptionsVisible}
        content="itemContent"
      />
    </View>
  );
};
