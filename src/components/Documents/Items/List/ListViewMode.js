import React, { useState } from "react";
import { View } from "react-native";

import NoteListItem from "./NoteListItem";
import BookListItem from "./BookListItem";

export default ListView = props => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  return (
    <View>
      {props.item.type === "note" ? (
        <NoteListItem
          {...props}
          isOptionsVisible={isOptionsVisible}
          setIsOptionsVisible={setIsOptionsVisible}
        />
      ) : (
        <BookListItem
          {...props}
          isOptionsVisible={isOptionsVisible}
          setIsOptionsVisible={setIsOptionsVisible}
        />
      )}
    </View>
  );
};
