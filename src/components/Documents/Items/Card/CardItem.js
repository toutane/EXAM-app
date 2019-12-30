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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 90
              // justifyContent: "center"
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "sf-text-regular",
                fontSize: 18,
                color: props.theme.blue
              }}
            >
              {props.item.title}
            </Text>
            <Feather name="chevron-down" color={props.theme.blue} size={18} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            top: -6,
            fontSize: 13,
            // moment(props.item.creation_date)
            //   .startOf("min")
            //   .fromNow() === "a few seconds ago"
            //   ? 10
            //   : 13,
            fontFamily: "sf-text-regular",
            color: props.theme.gray
          }}
        >
          {// moment(props.item.creation_date)
          //   .startOf("min")
          //   .fromNow()
          moment(props.item.creation_date).format("L")}
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
