import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Exam from "../views/Exam";

const ExamStack = createStackNavigator(
  {
    Exam: {
      screen: Exam
    }
  },
  {
    initialRouteName: "Exam",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(ExamStack);
