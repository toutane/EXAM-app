import React, { useState } from "react";
import { View, TouchableOpacity, Button, Text } from "react-native";
import Modal, { SlideAnimation } from "react-native-modals";

export default CreateCard = props => {
  const [isVisible, setIsVisible] = useState(false);
  function createCard() {
    // Share.share({
    //   message: "React Native | A framework for building native apps using React"
    // });
    setIsVisible(true);
    // props.setData(prevData => {
    //   const prevNumber = parseInt(
    //     prevData[prevData.length - 1].title.split(" ")[1],
    //     10
    //   );
    //   return [
    //     ...prevData,
    //     ...[
    //       {
    //         title: `Chapitre ${prevNumber >= 9 ? 1 : prevNumber + 1}`,
    //         color: prevNumber % 2 == 0 ? "rgb(48, 209, 88)" : "rgb(255, 149, 0)"
    //       }
    //     ]
    //   ];
    // });
  }
  return (
    <TouchableOpacity
      style={{ alignItems: "center", marginLeft: 30 }}
      onPress={() => createCard()}
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
      <Button title="New" onPress={() => createCard()} />
      <Modal
        onTouchOutside={() => {
          setIsVisible(false);
        }}
        width={0.9}
        overlayOpacity={0.5}
        visible={isVisible}
        rounded
        actionsBordered
        modalStyle={{ borderRadius: 10, top: 400 }}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            height: 40,
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => setIsVisible(false)}
        >
          <Text
            style={{
              position: "absolute",
              fontFamily: "sf-display-bold",
              fontSize: 17
            }}
          >
            OK
          </Text>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
};
