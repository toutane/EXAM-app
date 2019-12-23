import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Account from "../views/Account";

const AccountStack = createStackNavigator(
  {
    Account: {
      screen: Account
    }
  },
  {
    initialRouteName: "Account",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AccountStack);
