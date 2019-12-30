import React from "react";
import { View, TouchableOpacity, Text, Keyboard } from "react-native";
import Modal, { SlideAnimation } from "react-native-modals";
import KeyboardSpacer from "react-native-keyboard-spacer";

import ModalItem from "./ModalItem";
import ModalInput from "./ModalInput";

export default BottomInputModal = props => {
  const itemContent = [
    { title: "Input", function: e => console.log(e) },
    {
      title: "Duplicate",
      icon: "copy",
      function: () => {
        props.duplicate_item(props.item), props.setIsVisible(false);
      }
    },
    { title: "Move", icon: "shopping-cart", function: () => alert("Moved") },
    {
      title: "Export all",
      icon: "external-link",
      function: () => alert("Expoted")
    },
    {
      title: "Delete",
      icon: "trash-2",
      function: () => {
        props.delete_item(props.item), props.setIsVisible(false);
      }
    },
    { title: "OK" }
  ];
  const content = props.content === "itemContent" ? itemContent : [];
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
          zIndex: 0,
          // top: 225,
          backgroundColor: "transparent"
        }}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              props.setIsVisible(false), Keyboard.dismiss();
            }}
            style={{
              width: "100%",
              backgroundColor: "transparent",
              height: 450
            }}
          />
          <View
            style={{
              backgroundColor: "transparent"
            }}
          >
            <View
              style={{
                backgroundColor: props.theme.gray6,
                paddingLeft: 15,
                borderRadius: 12,
                height: 290,
                width: "100%",
                justifyContent: "center"
              }}
              onPress={() => props.setIsVisible(false)}
            >
              {content
                .filter((e, i) => i !== content.length - 1)
                .map((e, i) =>
                  e.title === "Input" ? (
                    <ModalInput {...props} key={i} />
                  ) : (
                    <ModalItem
                      {...props}
                      key={i}
                      item={e}
                      last={content.length - 2 === i ? true : false}
                    />
                  )
                )}
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
              onPress={() => {
                props.setIsVisible(false), Keyboard.dismiss();
              }}
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
        </View>
        <KeyboardSpacer topSpacing={260} />
      </Modal>
    </View>
  );
};
