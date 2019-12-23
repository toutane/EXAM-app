import React, { useState, useEffect } from "react";
import { View } from "react-native";

import ListItem from "./ListItem";

export default ListView = props => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  return (
    <View>
      <ListItem
        {...props}
        isOptionsVisible={isOptionsVisible}
        setIsOptionsVisible={setIsOptionsVisible}
      />
    </View>
  );
};
