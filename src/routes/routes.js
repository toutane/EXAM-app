import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";

import BottomTabBar from "../components/Tabs/bottomTabBar";

import DocumentsStack from "./DocumentsNavigator";

import Library from "../views/Library";

const TabBarNavigator = createBottomTabNavigator(
  {
    Library: {
      screen: Library
    },
    Documents: {
      screen: DocumentsStack
    }
  },

  {
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        routeName === "Library"
          ? (iconName = `ios-albums`)
          : routeName === "Documents"
          ? (iconName = `ios-today`)
          : (iconName = `ios-search`);

        return (
          <Ionicons
            name={iconName}
            size={28}
            color={tintColor}
            style={{ marginTop: 10 }}
          />
        );
      }
    }),
    initialRouteName: "Documents",
    tabBarComponent: props => (
      <BottomTabBar
        {...props}
        activeTintColor="rgb(0, 122, 255)"
        inactiveTintColor="rgb(142, 142, 147)"
      />
    )
  }
);

const AppNavigator = createStackNavigator(
  {
    TabBarNavigator: TabBarNavigator
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
