import React from "react";
import { View } from "react-native";

import Switch from "./Filters.js/Switch";

export default FilterBar = props => {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}
    >
      <Switch {...props} />
    </View>
  );
};
