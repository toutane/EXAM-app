import React from "react";
import { View, Text } from "react-native";

export default InfoCard = props => {
  return (
    <View
      style={{ paddingHorizontal: 15, marginTop: 15, flexDirection: "row" }}
    >
      <View
        style={{
          backgroundColor: props.theme.gray5,
          borderRadius: 12,
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginRight: 20,
          width: "60%"
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "sf-display-bold",
            color: props.theme.fontColor
          }}
        >
          50% success
        </Text>
        <View
          style={{
            marginTop: 15
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "sf-display-bold",
              color: props.theme.fontColor
            }}
          >
            5 correct
          </Text>
          <Text
            style={{
              marginTop: 15,
              fontSize: 30,
              fontFamily: "sf-display-bold",
              color: props.theme.fontColor
            }}
          >
            5 wrong
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: props.exam.color,
          borderRadius: 12,
          paddingHorizontal: 20,
          paddingVertical: 20,
          width: "35%"
        }}
      />
    </View>
  );
};
