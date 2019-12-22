import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { AuthContext } from "./auth-context";
import { UserContext } from "./user-context";

const NoteContext = React.createContext();
const { Provider } = NoteContext;

const moment = require("moment");

const NoteProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId } = useContext(UserContext);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    currentUserId !== "" ? notesListenToChanges() : null;
  }, [currentUserId]);

  useEffect(() => console.log("loaded state " + loaded), [loaded]);

  async function notesListenToChanges() {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("notes")
      .onSnapshot(() => loadNotes());
  }

  async function currentNoteListen(noteId) {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("notes")
      .doc(noteId)
      .onSnapshot(
        () => loadCurrentNote(noteId),
        console.log(`listen to ${noteId}`)
      );
  }

  async function loadNotes() {
    const notes = await firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("notes")
      .get();
    return (
      setNotes(
        notes.docs.map(doc => ({
          ...doc.data(),
          ...{ id: doc.id }
        }))
      ),
      setLoaded(true)
    );
  }

  async function loadCurrentNote(noteId) {
    const note = await firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("notes")
      .doc(noteId)
      .get();
    return setCurrentNote(note.data());
  }

  deleteNote = noteId => {
    authenticated
      ? firebase.db
          .collection("users")
          .doc(currentUserId)
          .collection("notes")
          .doc(noteId)
          .delete()
      : alert("You mst be authenticated to delete this note 🙅‍♂️");
  };

  return (
    <Provider
      value={{
        notes,
        setNotes,
        loadNotes,
        deleteNote,
        currentNote,
        currentNoteListen,
        loaded
      }}
    >
      {props.children}
    </Provider>
  );
};

export { NoteProvider, NoteContext };
