import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";
import { View } from "react-native";

import { ThemeProvider } from "../contexts/theme-context";
import { AuthContext } from "../contexts/auth-context";
import { UserProvider } from "../contexts/user-context";
import { NoteProvider } from "../contexts/note-context";
import { BookProvider } from "../contexts/book-context";

import Routes from "../routes/routes";

export default function FirebaseInitialized(props) {
  const { setAuthenticated } = useContext(AuthContext);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
      firebase.auth.onAuthStateChanged(user => {
        user
          ? (setLoading(false), setAuthenticated(true))
          : (setLoading(false), setAuthenticated(false));
      });
    });
  }, []);
  return firebaseInitialized !== false ? (
    <ThemeProvider>
      <UserProvider>
        <NoteProvider>
          <BookProvider>
            <Routes />
          </BookProvider>
        </NoteProvider>
      </UserProvider>
    </ThemeProvider>
  ) : (
    <View />
  );
}
