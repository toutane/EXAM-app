import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { QuestionContext } from "../../contexts/question-context";

export default AddQuestionBtn = props => {
  const { add_question } = useContext(QuestionContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      title="Add question"
      onPress={() => {
        add_question(props.exam, {
          question: "",
          answer: ""
        }),
          props.setAutoFocus(true);
      }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.exam.color,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderRadius: 12,
        marginTop: 20,
        paddingVertical: 10,
        width: "35%"
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 17,
          fontFamily: "sf-display-semibold"
        }}
      >
        Add question
      </Text>
    </TouchableOpacity>
  );
};
