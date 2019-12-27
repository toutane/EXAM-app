import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default Question = props => {
  const [newQ, setNewQ] = useState("");
  useEffect(() => setNewQ(props.item.question), [props.item.question]);
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Feather
          name={props.item.status}
          color={props.item.status === "check" ? props.theme.green : "red"}
          size={20}
        />
        <TextInput
          onBlur={() =>
            !newQ.replace(/\s/g, "").length
              ? props.delete_question(props.exam, props.item.id)
              : props.update_question(props.exam, props.item.id, {
                  question: newQ,
                  answer: props.item.answer,
                  status: props.item.status,
                  creation_date: props.item.creation_date
                })
          }
          multiline={true}
          style={{
            width: "100%",
            height: "100%",
            paddingVertical: 10,
            borderRadius: 12,
            fontSize: 19,
            fontFamily: "sf-text-semibold",
            paddingLeft: 10,
            paddingRight: 20,
            color: props.theme.fontColor
          }}
          onChangeText={e => setNewQ(e)}
          value={newQ}
          autoCapitalize="none"
          autoFocus={props.autoFocus}
          returnKeyType="go"
        />
      </View>
      {!props.last && (
        <View
          style={{
            backgroundColor: props.theme.hr,
            marginLeft: 30,
            width: 1000,
            height: 1
          }}
        />
      )}
    </View>
  );
};
