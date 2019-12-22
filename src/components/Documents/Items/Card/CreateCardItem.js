import React, { useState } from "react";
import { View, TouchableOpacity, Button, Text } from "react-native";
import DoubleClick from "rn-double-click";

import BottomModal from "../../../Modals/BottomModal";

export default CreateCardItem = props => {
  const [isVisible, setIsVisible] = useState(false);
  function createCard(type) {
    // props.setData(prevData => {
    //   const prevNumber = parseInt(
    //     prevData[prevData.length - 1].title.split(" ")[1],
    //     10
    //   );
    //   return [
    //     ...prevData,
    //     ...[
    //       {
    //         title: `Note ${prevNumber >= 9 ? 1 : prevNumber + 1}`,
    //         color: prevNumber % 2 == 0 ? "rgb(48, 209, 88)" : "rgb(255, 149, 0)"
    //       }
    //     ]
    //   ];
    // });
    props.setData(prevData => {
      return [
        ...prevData,
        ...[
          {
            type: type,
            title: type === "note" ? "Note" : "Book",
            color: type === "note" ? "rgb(255, 204, 0)" : "rgb(48, 209, 88)"
          }
        ]
      ];
    });
  }
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
        content={[
          { title: "QuickNote", function: () => createCard("note") },
          { title: "Book", function: () => createCard("book") },
          { title: "Cancel" }
        ]}
      />
    </TouchableOpacity>
  );
};
