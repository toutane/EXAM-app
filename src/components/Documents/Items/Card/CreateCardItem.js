import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Button, Text } from "react-native";

import BottomModal from "../../../Modals/BottomModal";

export default CreateCardItem = props => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TouchableOpacity
      style={{ alignItems: "center", marginLeft: 30 }}
      onPress={() => setIsVisible(true)}
    >
      <View
        style={{
          marginTop: 30,
          height: 130,
          width: 100,
          backgroundColor: props.theme.backgroundColor,
          borderWidth: 1,
          borderRadius: 8,
          borderStyle: "dashed",
          borderColor: props.theme.blue,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 40, color: props.theme.blue }}>+</Text>
      </View>
      <Button title="New" onPress={() => setIsVisible(true)} />
      <BottomModal
        {...props}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        content="createContent"
      />
    </TouchableOpacity>
  );
};
