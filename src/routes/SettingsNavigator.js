import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Settings from "../views/Settings";

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: "Settings",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(SettingsStack);
