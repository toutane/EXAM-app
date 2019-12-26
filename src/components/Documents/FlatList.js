import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView } from "react-native";

import { ItemContext } from "../../contexts/item-context";
import { ExamContext } from "../../contexts/exam-context";
import { BookContext } from "../../contexts/book-context";

import CardView from "./Items/Card/CardViewMode";
import ListView from "./Items/List/ListViewMode";
import CreateCardItem from "./Items/Card/CreateCardItem";
import CreateListItem from "./Items/List/CreateListItem";

export default DocsFlatList = props => {
  const { create_item, duplicate_item, update_item, delete_item } = useContext(
    ItemContext
  );
  const { notes } = useContext(ExamContext);
  const { books } = useContext(BookContext);
  const [docs, setDocs] = useState([]);
  useEffect(() => setDocs([...[{ type: "create" }], ...notes, ...books]), [
    notes,
    books
  ]);
  const sortedDocs =
    props.filterBy === 0
      ? docs.sort(function(a, b) {
          if (a.creation_date > b.creation_date) return -1;
          if (a.creation_date < b.creation_date) return 1;
          return 0;
        })
      : docs.sort(function(a, b) {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
  function createItem(item) {
    create_item(item);
  }
  function duplicateItem(item) {
    duplicate_item(item);
  }
  function deleteItem(item) {
    delete_item(item);
  }
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
          {sortedDocs.map((item, index) =>
            item.type !== "create" ? (
              <CardView
                {...props}
                key={index}
                item={item}
                deleteItem={item => deleteItem(item)}
                update_item={(item, newTitle, isFavorite) =>
                  update_item(item, newTitle, isFavorite)
                }
                duplicateItem={item => duplicateItem(item)}
              />
            ) : (
              <CreateCardItem
                {...props}
                key={index}
                item={item}
                createItem={item => createItem(item)}
              />
            )
          )}
        </ScrollView>
      ) : (
        <ScrollView style={{ marginBottom: 200, marginTop: 10 }}>
          {sortedDocs.map((item, index) =>
            item.type !== "create" ? (
              <ListView
                {...props}
                key={index}
                item={item}
                deleteItem={item => deleteItem(item)}
                update_item={(item, newTitle, isFavorite) =>
                  update_item(item, newTitle, isFavorite)
                }
                duplicateItem={item => duplicateItem(item)}
              />
            ) : (
              <CreateListItem
                {...props}
                key={index}
                item={item}
                createItem={item => createItem(item)}
              />
            )
          )}
        </ScrollView>
      )}
    </View>
  );
};
