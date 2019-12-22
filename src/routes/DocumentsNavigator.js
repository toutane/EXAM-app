import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Documents from "../views/Documents";

const DocumentsStack = createStackNavigator(
  {
    Documents: {
      screen: Documents
    }
  },
  {
    initialRouteName: "Documents",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(DocumentsStack);
