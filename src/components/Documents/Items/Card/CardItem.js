import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";

const moment = require("moment");

import BottomInputModal from "../../../Modals/BottomInputModal";
import BookItem from "./BookItem";
import NoteItem from "./NoteItem";

export default CardItem = props => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={{ alignItems: "center", marginLeft: 30 }}
        onPress={() =>
          props.item.type === "exam"
            ? props.navigation.navigate("Exam", { currentItem: props.item })
            : null
        }
      >
        {props.item.type === "exam" ? (
          <NoteItem
            {...props}
            isOptionsVisible={isOptionsVisible}
            setIsOptionsVisible={setIsOptionsVisible}
          />
        ) : (
          <BookItem
            {...props}
            isOptionsVisible={isOptionsVisible}
            setIsOptionsVisible={setIsOptionsVisible}
          />
        )}
        <TouchableOpacity
          style={{ paddingVertical: 7 }}
          onPress={() => setIsOptionsVisible(true)}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "sf-text-regular",
                fontSize: 15,
                color: props.theme.blue
              }}
            >
              {props.item.title.length >= 12
                ? props.item.title.slice(0, 9) + "..."
                : props.item.title}
            </Text>
            <Feather name="chevron-down" color={props.theme.blue} size={14} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            top: -6,
            fontSize:
              moment(props.item.creation_date)
                .startOf("min")
                .fromNow() === "a few seconds ago"
                ? 10
                : 12,
            fontFamily: "sf-text-regular",
            color: props.theme.gray
          }}
        >
          {moment(props.item.creation_date)
            .startOf("min")
            .fromNow()}
        </Text>
      </TouchableOpacity>
      <BottomInputModal
        {...props}
        isVisible={isOptionsVisible}
        setIsVisible={setIsOptionsVisible}
        content="itemContent"
      />
    </View>
  );
};
