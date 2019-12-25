import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import ItemView from "./Item/Item";

export default ExamList = props => {
  const [items, setItems] = useState([
    {
      title: "Question 1",
      description: "What is exam app ?",
      status: "good"
    },
    {
      title: "Question 2",
      description: "What is react-native ?",
      status: "bad"
    },
    {
      title: "Question 3",
      description: "What is expo ?",
      status: "undefined"
    }
  ]);
  return (
    <ScrollView
      style={{ marginBottom: 200, marginTop: 10, paddingHorizontal: 15 }}
    >
      {items.map((item, index) => (
        <ItemView
          {...props}
          key={index}
          item={item}
          items={items}
          setItems={setItems}
        />
      ))}
    </ScrollView>
  );
};
