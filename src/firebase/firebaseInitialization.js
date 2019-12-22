import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";
import { View, Text } from "react-native";

import { AuthContext } from "../contexts/auth-context";
import { UserProvider } from "../contexts/user-context";
import { ThemeProvider } from "../contexts/theme-context";

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
    // <AppearanceProvider>
    <ThemeProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ThemeProvider>
  ) : (
    // </AppearanceProvider>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text
        style={{
          textAlign: "center",
          marginHorizontal: 50,
          fontSize: 34,
          fontFamily: "sf-display-bold"
        }}
      >
        🔥 initialization...
      </Text>
    </View>
  );
}
