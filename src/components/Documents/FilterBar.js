import React from "react";
import { View } from "react-native";

import Switch from "./Filters.js/Switch";
import ViewMode from "./Filters.js/ViewMode";

export default FilterBar = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
        alignItems: "center"
      }}
    >
      <Switch {...props} />
      <ViewMode {...props} />
    </View>
  );
};
