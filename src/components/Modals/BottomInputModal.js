import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Animated } from "react-native";
import Modal, { SlideAnimation } from "react-native-modals";

import ModalItem from "./ModalItem";
import ModalInput from "./ModalInput";

export default BottomInputModal = props => {
  const [test, setTest] = useState("Input");
  const [modalHeight, setModalHeight] = useState(0);
  useEffect(
    () =>
      setModalHeight(modalHeight =>
        test === props.content[0].title ? modalHeight : modalHeight - 10
      ),
    [test]
  );
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
          top: 225,
          backgroundColor: "transparent"
        }}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
      >
        <View
          style={{
            backgroundColor: "transparent"
          }}
        >
          <Animated.View
            style={{
              top: modalHeight,
              backgroundColor: props.theme.gray6,
              paddingLeft: 15,
              borderRadius: 12,
              height: 290,
              width: "100%",
              justifyContent: "center"
            }}
            onPress={() => props.setIsVisible(false)}
          >
            {props.content
              .filter((e, i) => i !== props.content.length - 1)
              .map((e, i) =>
                e.title === "Input" ? (
                  <ModalInput
                    {...props}
                    key={i}
                    item={e}
                    test={test}
                    setTest={setTest}
                  />
                ) : (
                  <ModalItem
                    {...props}
                    key={i}
                    item={e}
                    last={props.content.length - 2 === i ? true : false}
                  />
                )
              )}
          </Animated.View>
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
              {props.content[props.content.length - 1].title}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
