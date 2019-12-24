import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput } from "react-native";

export default ModalInput = props => {
  const [title, setTitle] = useState(props.item.title);
  const [newTitle, setNewTitle] = useState(props.item.title);
  useEffect(() => {
    newTitle !== title && props.updateItem(props.item, newTitle, null);
  }, [props.isVisible]);
  return (
    <View>
      <TextInput
        style={{
          height: 45,
          marginBottom: 10,
          backgroundColor: props.theme.gray5,
          borderRadius: 12,
          marginRight: 15,
          fontSize: 19,
          fontFamily: "sf-text-semibold",
          paddingHorizontal: 10,
          color: props.theme.fontColor
        }}
        onChangeText={e => setNewTitle(e)}
        value={newTitle}
        autoCapitalize="none"
        autoFocus={false}
        returnKeyType="go"
      />
    </View>
  );
};
