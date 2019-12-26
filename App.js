import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

import { AuthProvider } from "./src/contexts/auth-context";
import FirebaseInitialization from "./src/firebase/firebaseInitialization";

export default function App(props) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  async function loadFonts() {
    await Font.loadAsync({
      "sf-text-regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
      "sf-text-medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
      "sf-text-semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
      "sf-display-medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
      "sf-display-semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
      "sf-display-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf")
    });
    setFontLoaded(true);
  }

  return fontLoaded ? (
    <AuthProvider>
      <FirebaseInitialization />
    </AuthProvider>
  ) : (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Fonts not loaded 😢</Text>
    // </View>
    <View />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 40
  }
});
