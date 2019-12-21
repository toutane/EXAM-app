import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native";

import CardView from "./Item/Card/View";

export default DocsFlatList = props => {
  const [data, setData] = useState([
    { createCard: true },
    { title: "Chapitre 1", color: "rgb(48, 209, 88)" }
  ]);
  return (
    <ScrollView
      style={{ marginBottom: 130 }}
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap"
      }}
    >
      {data.map((item, index) => (
        <CardView
          {...props}
          key={index}
          item={item}
          // data={data}
          setData={setData}
        />
      ))}
    </ScrollView>
    // <FlatList
    //   style={{ paddingHorizontal: 30 }}
    //   data={data}
    //   renderItem={({ item, index }) => (
    //     <CardView
    //       key={index}
    //       item={item}
    //       {...props}
    //       data={data}
    //       setData={setData}
    //     />
    //   )}
    //   numColumns={3}
    //   keyExtractor={(item, index) => index.toString()}
    // />
  );
};
