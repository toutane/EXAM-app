import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import CardView from "./Item/Card/View";
import ListView from "./Item/List/View";

export default DocsFlatList = props => {
  const [data, setData] = useState([
    { createCard: true },
    { title: "Note 1", color: "rgb(48, 209, 88)" }
  ]);
  return (
    <View>
      {props.viewMode === "Card" ? (
        <ScrollView
          style={{ marginBottom: 130 }}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {data.map((item, index) => (
            <CardView {...props} key={index} item={item} setData={setData} />
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={{ marginBottom: 130, marginTop: 10 }}>
          {data.map((item, index) => (
            <ListView {...props} key={index} item={item} setData={setData} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
