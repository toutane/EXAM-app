import React from "react";
import { View, Text, SegmentedControlIOS } from "react-native";

export default Switch = props => {
  return (
    <View>
      <SegmentedControlIOS
        values={["Date", "Name"]}
        selectedIndex={props.filterBy === "Date" ? 0 : 1}
        onChange={e => {
          props.setFilterBy(e.nativeEvent.selectedSegmentIndex);
        }}
        style={{ width: 200 }}
      />
    </View>
  );
};
