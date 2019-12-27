import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import Question from "./Item/Question";
import AddQuestionBtn from "./btn-addQuestion";

export default QuestionList = props => {
  const [autoFocus, setAutoFocus] = useState(false);

  return (
    <View style={{ paddingHorizontal: 15 }}>
      {props.nbQ >= 1 && (
        <ScrollView
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
            paddingVertical: 5,
            backgroundColor: props.theme.gray5,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            fontSize: 19,
            fontFamily: "sf-text-semibold",
            paddingHorizontal: 10,
            color: props.theme.fontColor
          }}
        >
          {props.exam.questions
            .sort(function(a, b) {
              if (a.creation_date < b.creation_date) return -1;
              if (a.creation_date > b.creation_date) return 1;
              return 0;
            })
            .map((item, index) => (
              <Question
                {...props}
                key={index}
                item={item}
                last={props.exam.questions.length - 1 === index}
                autoFocus={autoFocus}
              />
            ))}
        </ScrollView>
      )}
      <AddQuestionBtn {...props} setAutoFocus={setAutoFocus} />
    </View>
  );
};
