import React, { useState, useEffect } from "react";
import { View, TextInput, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";

import Hr from "../../Hr/Hr";

export default Question = props => {
  const [newQ, setNewQ] = useState("");
  useEffect(() => setNewQ(props.item.question), [props.item.question]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
          paddingHorizontal: 5
        }}
      >
        <View>
          <Feather
            style={{ marginTop: 5 }}
            name={props.item.status}
            color={props.item.status === "check" ? props.theme.green : "red"}
            size={20}
          />
        </View>
        <TextInput
          scrollEnabled={false}
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
            fontFamily: "sf-text-semibold",
            fontSize: 19,
            paddingLeft: 10,
            paddingRight: 20,
            color: props.theme.fontColor
          }}
          onChangeText={e => setNewQ(e)}
          blurOnSubmit={true}
          onSubmitEditing={() => Keyboard.dismiss()}
          value={newQ}
          autoCapitalize="none"
          autoFocus={props.autoFocus}
          returnKeyType="go"
        />
      </View>
      <Hr padding={30} />
    </View>
  );
};
