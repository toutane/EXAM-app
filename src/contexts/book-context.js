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
  const [currentBook, setCurrentBook] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    currentUserId !== "" ? booksListenToChanges() : null;
  }, [currentUserId]);

  useEffect(() => console.log("loaded state " + loaded), [loaded]);

  async function booksListenToChanges() {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("books")
      .onSnapshot(() => loadBooks());
  }

  async function currentBookListen(bookId) {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("books")
      .doc(bookId)
      .onSnapshot(
        () => loadCurrentBook(bookId),
        console.log(`listen to ${bookId}`)
      );
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

  async function loadCurrentBook(bookId) {
    const book = await firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("books")
      .doc(bookId)
      .get();
    return setCurrentBook(book.data());
  }

  deleteBook = bookId => {
    authenticated
      ? firebase.db
          .collection("users")
          .doc(currentUserId)
          .collection("book")
          .doc(bookId)
          .delete()
      : alert("You mst be authenticated to delete this book 🙅‍♂️");
  };

  return (
    <Provider
      value={{
        books,
        setBooks,
        loadBooks,
        deleteBook,
        currentBook,
        currentBookListen,
        loaded
      }}
    >
      {props.children}
    </Provider>
  );
};

export { BookProvider, BookContext };
