import React, { useState, useContext } from "react";
import { Button, View, Text } from "react-native";
import { ThemeContext } from "../contexts/theme-context";
import { AuthContext } from "../contexts/auth-context";
import { UserContext } from "../contexts/user-context";

export default Library = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const { authenticated, register, login, logout } = useContext(AuthContext);
  const { currentUserData } = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.backgroundColor
      }}
    >
      <Text
        style={{
          textAlign: "center",
          marginHorizontal: 50,
          fontSize: 34,
          fontFamily: "sf-display-bold",
          color: theme.fontColor
        }}
      >
        {authenticated
          ? currentUserData.username === undefined
            ? ""
            : currentUserData.username
          : null}
      </Text>
      <Button
        title="Go to Documents screen"
        color={theme.buttonColor}
        onPress={() => props.navigation.navigate("Documents")}
      />
      <Button
        title="Switch theme"
        color={theme.buttonColor}
        onPress={() => switchTheme()}
      />
      <Button
        title="Sign In"
        color={theme.buttonColor}
        onPress={() =>
          login("email@email.com", "123456").catch(error => console.log(error))
        }
      />
      <Button
        title="Sign Up"
        color={theme.buttonColor}
        onPress={() =>
          register("john", "email@email.com", "123456").catch(error =>
            console.log(error)
          )
        }
      />
      <Button
        title="Sign Out"
        color={theme.buttonColor}
        onPress={() => logout()}
      />
    </View>
  );
};
