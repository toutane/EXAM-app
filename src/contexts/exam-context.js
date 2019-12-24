import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { AuthContext } from "./auth-context";
import { UserContext } from "./user-context";

const ExamContext = React.createContext();
const { Provider } = ExamContext;

const moment = require("moment");

const ExamProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId } = useContext(UserContext);
  const [notes, setNotes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [currentNote, setCurrentNote] = useState({ title: "" });

  useEffect(() => {
    currentUserId !== "" ? notesListenToChanges() : setNotes([]);
  }, [currentUserId]);

  // useEffect(() => console.log("loaded notes state : " + loaded), [loaded]);

  async function notesListenToChanges() {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("exams")
      .onSnapshot(() => loadNotes());
  }

  async function loadNotes() {
    const notes = await firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("exams")
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
      .collection("exams")
      .doc(noteId)
      .get();
    return setCurrentNote(note.data());
  }

  return (
    <Provider
      value={{
        notes,
        currentNote,
        setNotes,
        loadNotes,
        loadCurrentNote,
        loaded
      }}
    >
      {props.children}
    </Provider>
  );
};

export { ExamProvider, ExamContext };
