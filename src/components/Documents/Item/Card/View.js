import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";

import CreateCard from "./CreateCard";

export default CardView = props => {
  return (
    <View>
      {props.item.createCard ? (
        <CreateCard {...props} />
      ) : (
        <View style={{ alignItems: "center", marginLeft: 30 }}>
          <TouchableOpacity
            onPress={() => alert("card pressed")}
            style={{
              marginTop: 30,
              height: 130,
              width: 100,
              backgroundColor: props.item.color,
              borderRadius: 8,
              shadowOpacity: 0.1,
              shadowRadius: "4px",
              shadowColor: props.theme.fontColor
            }}
          />
          <Button
            title={props.item.title}
            onPress={() => alert(`${props.item.title} pressed`)}
          />
          <Text
            style={{
              top: -6,
              fontSize: 12,
              fontFamily: "sf-text-regular",
              color: props.theme.gray
            }}
          >
            aujourd'hui
          </Text>
        </View>
      )}
    </View>
  );
};
