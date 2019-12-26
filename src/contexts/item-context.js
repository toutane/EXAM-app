import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { UserContext } from "./user-context";

const ItemContext = React.createContext();
const { Provider } = ItemContext;

const moment = require("moment");

const ItemProvider = props => {
  const { currentUserId } = useContext(UserContext);

  const [currentItem, setCurrentItem] = useState({ title: "" });

  function listen_item(item) {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection(item.type + "s")
      .doc(item.id)
      .onSnapshot(
        () => load_item(item),
        console.log("\x1b[36m", "Listen", "\x1b[0m" + item.id)
      );
  }

  async function load_item(obj) {
    const currentObj = await firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection(obj.type + "s")
      .doc(obj.id)
      .get();
    return setCurrentItem(currentObj.data());
    // console.log(`Load item : ${currentObj.data().id}`)
  }

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
        color: item.color,
        isFavorite: false
      })
      .then(i => {
        firebase.db
          .collection("users")
          .doc(currentUserId)
          .collection(item.type + "s")
          .doc(i.id)
          .update({
            id: i.id
          }),
          console.log("\x1b[32m", "Create", "\x1b[0m" + i.id);
      });
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
      .then(i => {
        firebase.db
          .collection("users")
          .doc(currentUserId)
          .collection(item.type + "s")
          .doc(i.id)
          .update({
            id: i.id
          }),
          console.log("\x1b[35m", "Duplicate", "\x1b[0m" + item.id);
      });
  }
  update_item = (item, newTitle, isFavorite) => {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection(item.type + "s")
      .doc(item.id)
      .update({
        title: newTitle,
        isFavorite: isFavorite === undefined ? item.isFavorite : isFavorite,
        creation_date:
          isFavorite === null ? moment().format() : item.creation_date
      }),
      console.log("\x1b[33m", "Update", "\x1b[0m" + item.id);
  };
  delete_item = item => {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection(item.type + "s")
      .doc(item.id)
      .delete()
      .then(() => setCurrentItem({ title: "" })),
      console.log("\x1b[31m", "Delete", "\x1b[0m" + item.id);
  };

  return (
    <Provider
      value={{
        listen_item,
        load_item,
        currentItem,
        setCurrentItem,
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
