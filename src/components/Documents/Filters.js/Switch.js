import React from "react";
import { View, Text, SegmentedControlIOS } from "react-native";

export default Switch = props => {
  return (
    <View>
      <SegmentedControlIOS
        values={["Date", "Name"]}
        selectedIndex={props.filterBy}
        onChange={e => {
          // console.log(e.nativeEvent.selectedSegmentIndex);
          props.setFilterBy(e.nativeEvent.selectedSegmentIndex);
        }}
        style={{ width: 200 }}
      />
    </View>
  );
};
