import React, { useState } from "react";
import { View } from "react-native";

import Question from "./Item/Question";
import AddQuestionBtn from "./btn-addQuestion";

export default QuestionList = props => {
  const [autoFocus, setAutoFocus] = useState(false);

  return (
    <View style={{ paddingHorizontal: 15 }}>
      {props.exam.questions
        .sort(function(a, b) {
          if (a.creation_date < b.creation_date) return -1;
          if (a.creation_date > b.creation_date) return 1;
          return 0;
        })
        .map((item, index) => (
          <Question {...props} key={index} item={item} autoFocus={autoFocus} />
        ))}
      <AddQuestionBtn {...props} setAutoFocus={setAutoFocus} />
    </View>
  );
};
