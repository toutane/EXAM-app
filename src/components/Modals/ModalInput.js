import React, { useState, useEffect } from "react";
import { View, TextInput, Keyboard } from "react-native";

export default ModalInput = props => {
  const [newTitle, setNewTitle] = useState(props.item.title);
  useEffect(() => {
    newTitle !== props.item.title &&
      !props.isVisible &&
      props.update_item(props.item, {
        title: newTitle,
        isFavorite: props.item.isFavorite
      });
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
        // blurOnSubmit={true}
        // onSubmitEditing={
        //   (() => console.log("keyboard dismissed"), Keyboard.dismiss())
        // }
        value={newTitle}
        autoCapitalize="none"
        autoFocus={false}
        returnKeyType="go"
      />
    </View>
  );
};
