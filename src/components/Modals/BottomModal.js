import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Modal, { SlideAnimation } from "react-native-modals";

import ModalItem from "./ModalItem";

export default BottomModal = props => {
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
              backgroundColor: "white",
              paddingLeft: 15,
              borderRadius: 12,
              height: 115,
              width: "100%",
              justifyContent: "center"
            }}
            onPress={() => props.setIsVisible(false)}
          >
            {props.content
              .filter((e, i) => i !== props.content.length - 1)
              .map((e, i) => (
                <ModalItem
                  {...props}
                  key={i}
                  item={e}
                  last={props.content.length - 2 === i ? true : false}
                />
              ))}
          </View>
          <TouchableOpacity
            style={{
              marginTop: 7,
              backgroundColor: "white",
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
                fontSize: 19
              }}
            >
              {props.content[props.content.length - 1].title}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
