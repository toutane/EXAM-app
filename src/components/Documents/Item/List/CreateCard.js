import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { screenWidth } from "../../../../utils/dimensions";

import BottomModal from "../../../Modals/BottomModal";

export default CreateCard = props => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={{ paddingHorizontal: 15, marginTop: 10 }}
        onPress={() => setIsVisible(true)}
      >
        <View
          style={{
            paddaingHorizontal: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start"
          }}
        >
          <View
            style={{
              height: 65,
              width: 50,
              backgroundColor: props.theme.backgroundColor,
              borderWidth: 1,
              borderRadius: 8,
              borderStyle: "dashed",
              borderColor: props.theme.blue,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 25, color: props.theme.blue }}>+</Text>
          </View>
          <Text
            style={{
              marginLeft: 15,
              fontFamily: "sf-text-regular",
              fontSize: 19,
              color: props.theme.blue
            }}
          >
            New
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0 ,0 ,0 ,0.1)",
            width: screenWidth - 30,
            height: 1,
            marginTop: 10
          }}
        />
      </TouchableOpacity>
      <BottomModal
        {...props}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        content={[
          { title: "QuickNote" },
          { title: "Book" },
          { title: "Folder" },
          { title: "Import" },
          { title: "Cancel" }
        ]}
      />
    </View>
  );
};
