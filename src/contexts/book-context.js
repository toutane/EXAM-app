import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { AuthContext } from "./auth-context";
import { UserContext } from "./user-context";

const BookContext = React.createContext();
const { Provider } = BookContext;

const moment = require("moment");

const BookProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    currentUserId !== "" ? booksListenToChanges() : setBooks([]);
  }, [currentUserId]);

  // useEffect(() => console.log("loaded books state : " + loaded), [loaded]);

  async function booksListenToChanges() {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("books")
      .onSnapshot(() => loadBooks());
  }

  async function loadBooks() {
    const books = await firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("books")
      .get();
    return (
      setBooks(
        books.docs.map(doc => ({
          ...doc.data(),
          ...{ id: doc.id }
        }))
      ),
      setLoaded(true)
    );
  }

  return (
    <Provider
      value={{
        books,
        setBooks,
        loadBooks,
        loaded
      }}
    >
      {props.children}
    </Provider>
  );
};

export { BookProvider, BookContext };
