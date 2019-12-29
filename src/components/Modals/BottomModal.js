import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Modal, { SlideAnimation } from "react-native-modals";

import ModalItem from "./ModalItem";

export default BottomModal = props => {
  const createContent = [
    {
      title: "Quick exam",
      icon: "file",
      function: () =>
        props.create_item({
          type: "exam",
          title: "Untitled",
          // color: "rgb(255, 204, 0)"
          // color: "rgb(0, 122, 255)",
          color: "rgb(90, 200, 250)"
        })
    },
    {
      title: "Notebook",
      icon: "book",
      function: () =>
        props.create_item({
          type: "book",
          title: "Notebook",
          color: "rgb(48, 209, 88)"
        })
    },
    { title: "Cancel" }
  ];
  const content = props.content === "createContent" ? createContent : [];
  return (
    <View>
      <Modal
        onTouchOutside={() => {
          props.setIsVisible(false);
        }}
        width={0.95}
        overlayOpacity={0.5}
        visible={props.isVisible}
        rounded
        actionsBordered
        modalStyle={{
          borderRadius: 0,
          top: 320,
          backgroundColor: "transparent"
        }}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
      >
        <View style={{ backgroundColor: "transparent" }}>
          <View
            style={{
              backgroundColor: props.theme.gray6,
              paddingLeft: 15,
              borderRadius: 12,
              height: 115,
              width: "100%",
              justifyContent: "center"
            }}
            onPress={() => props.setIsVisible(false)}
          >
            {content
              .filter((e, i) => i !== content.length - 1)
              .map((e, i) => (
                <ModalItem
                  {...props}
                  key={i}
                  item={e}
                  last={content.length - 2 === i ? true : false}
                />
              ))}
          </View>
          <TouchableOpacity
            style={{
              marginTop: 7,
              backgroundColor: props.theme.gray6,
              borderRadius: 12,
              height: 50,
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => props.setIsVisible(false)}
          >
            <Text
              style={{
                position: "absolute",
                fontFamily: "sf-display-semibold",
                fontSize: 19,
                color: props.theme.fontColor
              }}
            >
              {content[content.length - 1].title}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
