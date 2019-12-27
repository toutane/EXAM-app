import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";
import { View } from "react-native";

import { ThemeProvider } from "../contexts/theme-context";
import { AuthContext } from "../contexts/auth-context";
import { UserProvider } from "../contexts/user-context";
import { ItemProvider } from "../contexts/item-context";
import { QuestionProvider } from "../contexts/question-context";
import { ExamProvider } from "../contexts/exam-context";
import { BookProvider } from "../contexts/book-context";

import Routes from "../routes/routes";

export default function FirebaseInitialized(props) {
  const { setAuthenticated } = useContext(AuthContext);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      loading
        ? console.log("\x1b[33m", "Firebase", "\x1b[0m", "initialization...")
        : console.log("\x1b[32m", "Firebase", "\x1b[0m", "initialized"),
    [loading]
  );

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
        <ItemProvider>
          <ExamProvider>
            <BookProvider>
              <QuestionProvider>
                <Routes />
              </QuestionProvider>
            </BookProvider>
          </ExamProvider>
        </ItemProvider>
      </UserProvider>
    </ThemeProvider>
  ) : (
    <View />
  );
}
