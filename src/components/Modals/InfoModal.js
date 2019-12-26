import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Modal, { SlideAnimation } from "react-native-modals";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { Feather } from "@expo/vector-icons";

import ModalInput from "./ModalInput";

const moment = require("moment");

export default InfoModal = props => {
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
          <View
            style={{
              backgroundColor: props.theme.gray6,
              paddingLeft: 15,
              borderRadius: 12,
              height: 290,
              width: "100%"
            }}
            onPress={() => props.setIsVisible(false)}
          >
            <Text
              style={{
                marginTop: 15,
                marginBottom: 10,
                fontFamily: "sf-text-regular",
                fontSize: 12,
                color: props.theme.gray
              }}
            >
              TITLE
            </Text>
            <ModalInput {...props} />
            <Text
              style={{
                marginTop: 5,
                marginBottom: 15,
                fontFamily: "sf-text-regular",
                fontSize: 12,
                color: props.theme.gray
              }}
            >
              DOCUMENT INFORMATIONS
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 20,
                alignItems: "center"
              }}
            >
              {/* <FontAwesomeIcon
                icon={faStickyNote}
                color={props.theme.fontColor}
                size={20}
              /> */}
              <Feather name="file" color={props.theme.fontColor} size={20} />
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "sf-text-regular",
                  fontSize: 19,
                  color: props.theme.fontColor
                }}
              >
                Quick exam
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Feather name="clock" color={props.theme.fontColor} size={20} />
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "sf-text-regular",
                  fontSize: 19,
                  color: props.theme.fontColor
                }}
              >
                Last update :{" "}
                {moment(props.item.creation_date)
                  .startOf("min")
                  .fromNow()}{" "}
              </Text>
            </View>
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
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
