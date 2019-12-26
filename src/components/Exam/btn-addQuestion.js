import React, { useContext } from "react";
import { View, Button } from "react-native";

import { QuestionContext } from "../../contexts/question-context";

export default AddQuestionBtn = props => {
  const { add_question } = useContext(QuestionContext);

  return (
    <View>
      <Button
        title="Add question"
        onPress={() =>
          add_question(props.item, {
            question: "What is spaceX ?",
            answer: "A private compagny for space exploration"
          })
        }
      />
    </View>
  );
};
