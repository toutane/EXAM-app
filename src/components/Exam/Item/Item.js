import React from "react";
import { View, TextInput } from "react-native";

export default ItemView = props => {
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
      onChangeText={e =>
        props.setItems(
          props.items.filter(item => item.title !== props.item.title)
        )
      }
      value={props.item.description}
      autoCapitalize="none"
      autoFocus={false}
      returnKeyType="go"
    />
  );
};
