import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { screenWidth } from "../../../../utils/dimensions";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

const moment = require("moment");

import BottomInputModal from "../../../Modals/BottomInputModal";
import BookItem from "./BookItem";
import NoteItem from "./NoteItem";

export default ListItem = props => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(props.item.isFavorite);
  useEffect(() => setIsFavorite(props.item.isFavorite), [
    props.item.isFavorite
  ]);
  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity
        style={{ paddingHorizontal: 15 }}
        onPress={() =>
          props.item.type === "exam"
            ? props.navigation.navigate("Exam", { currentItem: props.item })
            : null
        }
      >
        <View
          style={{
            paddaingHorizontal: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
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
            <View
              style={{
                flexDirection: "column",
                marginLeft: 15,
                marginTop: 8,
                width: 215
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "sf-text-regular",
                  fontSize: 19,
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
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <TouchableOpacity onPress={() => setIsOptionsVisible(true)}>
              <Feather
                name="chevron-down"
                color={props.theme.blue}
                size={30}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.update_item(props.item, {
                  title: props.item.title,
                  isFavorite: !props.item.isFavorite
                }),
                  Haptics.selectionAsync();
              }}
            >
              {/* <FontAwesomeIcon
                icon={faBookmark}
                color={isFavorite ? "red" : props.theme.blue}
                size={19}
                style={{ marginLeft: 5 }}
              /> */}
              <Feather
                name="bookmark"
                color={isFavorite ? "red" : props.theme.blue}
                size={25}
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
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
        isVisible={isOptionsVisible}
        setIsVisible={setIsOptionsVisible}
        content="itemContent"
      />
    </View>
  );
};
