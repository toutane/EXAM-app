import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView } from "react-native";

import { NoteContext } from "../../contexts/note-context";
import { BookContext } from "../../contexts/book-context";

import CardView from "./Items/Card/CardViewMode";
import ListView from "./Items/List/ListViewMode";
import CreateCardItem from "./Items/Card/CreateCardItem";
import CreateListItem from "./Items/List/CreateListItem";

export default DocsFlatList = props => {
  const { notes } = useContext(NoteContext);
  const { books } = useContext(BookContext);
  const [docs, setDocs] = useState([]);
  const [data, setData] = useState([
    { type: "create" },
    { type: "note", color: "rgb(255, 204, 0)", title: "Note" },
    { type: "book", color: "rgb(48, 209, 88)", title: "Book" }
  ]);
  useEffect(() => setDocs([...[{ type: "create" }], ...notes, ...books]), [
    notes
  ]);
  return (
    <View>
      {props.viewMode === "Card" ? (
        <ScrollView
          style={{ marginBottom: 200 }}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {docs.map((item, index) =>
            item.type !== "create" ? (
              <CardView {...props} key={index} item={item} setData={setData} />
            ) : (
              <CreateCardItem
                {...props}
                key={index}
                item={item}
                setData={setData}
              />
            )
          )}
        </ScrollView>
      ) : (
        <ScrollView style={{ marginBottom: 200, marginTop: 10 }}>
          {docs.map((item, index) =>
            item.type !== "create" ? (
              <ListView {...props} key={index} item={item} setData={setData} />
            ) : (
              <CreateListItem
                {...props}
                key={index}
                item={item}
                setData={setData}
              />
            )
          )}
        </ScrollView>
      )}
    </View>
  );
};
