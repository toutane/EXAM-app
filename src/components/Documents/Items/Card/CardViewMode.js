import React, { useState } from "react";
import { View } from "react-native";

import NoteCardItem from "./NoteCardItem";
import BookCardItem from "./BookCardItem";

export default CardView = props => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  return (
    <View>
      {props.item.type === "note" ? (
        <NoteCardItem
          {...props}
          isOptionsVisible={isOptionsVisible}
          setIsOptionsVisible={setIsOptionsVisible}
        />
      ) : (
        <BookCardItem
          {...props}
          isOptionsVisible={isOptionsVisible}
          setIsOptionsVisible={setIsOptionsVisible}
        />
      )}
    </View>
  );
};
