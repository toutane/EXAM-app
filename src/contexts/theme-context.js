import React, { useState, useEffect } from "react";
import { themeLD } from "../themes/theme-light-dark";
import { useColorScheme } from "react-native-appearance";

const ThemeContext = React.createContext();
const { Provider } = ThemeContext;

const ThemeProvider = props => {
  const [theme, setTheme] = useState(
    themeLD.find(e => e.theme === useColorScheme())
  );
  function switchTheme() {
    setTheme(theme.theme === "light" ? themeLD[1] : themeLD[0]);
  }

  // useEffect(() => console.log(theme), [theme]);

  return (
    <Provider
      value={{
        theme,
        switchTheme
      }}
    >
      {props.children}
    </Provider>
  );
};

export { ThemeProvider, ThemeContext };
