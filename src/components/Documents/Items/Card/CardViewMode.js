import React, { useState } from "react";
import { View } from "react-native";

import CardItem from "./CardItem";
export default CardView = props => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  return (
    <View>
      <CardItem
        {...props}
        isOptionsVisible={isOptionsVisible}
        setIsOptionsVisible={setIsOptionsVisible}
      />
    </View>
  );
};
