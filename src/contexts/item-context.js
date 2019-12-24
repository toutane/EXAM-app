import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { UserContext } from "./user-context";

const ItemContext = React.createContext();
const { Provider } = ItemContext;

const moment = require("moment");

const ItemProvider = props => {
  const { currentUserId } = useContext(UserContext);

  async function create_item(item) {
    const newItem = await firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection(item.type + "s")
      .add({
        id: "",
        type: item.type,
        title: item.title,
        creation_date: moment().format(),
        color: item.color
      })
      .then(i =>
        firebase.db
          .collection("users")
          .doc(currentUserId)
          .collection(item.type + "s")
          .doc(i.id)
          .update({
            id: i.id
          })
      );
  }
  async function duplicate_item(item) {
    const duplicatedItem = await firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection(item.type + "s")
      .add({
        id: "",
        type: item.type,
        title: item.title,
        creation_date: moment().format(),
        color: item.color
      })
      .then(i =>
        firebase.db
          .collection("users")
          .doc(currentUserId)
          .collection(item.type + "s")
          .doc(i.id)
          .update({
            id: i.id
          })
      );
  }
  update_item = (item, newTitle, isFavorite) => {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection(item.type + "s")
      .doc(item.id)
      .update({
        title: newTitle,
        isFavorite: isFavorite,
        creation_date:
          isFavorite === null ? moment().format() : item.creation_date
      });
  };
  delete_item = item => {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection(item.type + "s")
      .doc(item.id)
      .delete();
  };

  return (
    <Provider
      value={{
        create_item,
        duplicate_item,
        update_item,
        delete_item
      }}
    >
      {props.children}
    </Provider>
  );
};

export { ItemProvider, ItemContext };
