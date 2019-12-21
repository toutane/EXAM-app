import React from "react";
import { View, Text, TextInput } from "react-native";

export default ModalInput = props => {
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
          paddingHorizontal: 10
        }}
        onChangeText={e => props.setTest(e)}
        value={props.test}
        autoCapitalize="none"
        autoFocus={false}
        returnKeyType="go"
      />
    </View>
  );
};
