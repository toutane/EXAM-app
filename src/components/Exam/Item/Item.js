import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";

export default ItemView = props => {
  const [newQ, setNewQ] = useState("");
  useEffect(() => setNewQ(props.item.question), [props.item.question]);
  return (
    <TextInput
      style={{
        height: 45,
        marginBottom: 10,
        backgroundColor: props.theme.gray5,
        borderRadius: 12,
        fontSize: 19,
        fontFamily: "sf-text-semibold",
        paddingHorizontal: 10,
        color: props.theme.fontColor
      }}
      onChangeText={e => setNewQ(e)}
      onSubmitEditing={() =>
        props.update_question(props.exam, props.item.question, {
          question: newQ,
          answer: props.item.answer,
          status: props.item.status
        })
      }
      value={newQ}
      autoCapitalize="none"
      autoFocus={false}
      returnKeyType="go"
    />
  );
};
