import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { UserContext } from "./user-context";

const QuestionContext = React.createContext();
const { Provider } = QuestionContext;

const uuidv4 = require("uuid/v4");
const moment = require("moment");

const QuestionProvider = props => {
  const { currentUserId } = useContext(UserContext);

  async function add_question(exam, item) {
    await firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("exams")
      .doc(exam.id)
      .update({
        questions: exam.questions.concat([
          {
            id: uuidv4(),
            question: item.question,
            answer: item.answer,
            status: "check",
            creation_date: moment().format(),
            update_date: moment().format()
          }
        ])
      });
  }
  update_question = (exam, questionID, newItem) => {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("exams")
      .doc(exam.id)
      .update({
        questions: exam.questions
          .filter(i => i.id !== questionID)
          .concat([
            {
              id: questionID,
              question: newItem.question,
              answer: newItem.answer,
              status: newItem.status,
              creation_date: newItem.creation_date,
              update_date: moment().format()
            }
          ])
      });
  };
  delete_question = (exam, questionID) => {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("exams")
      .doc(exam.id)
      .update({
        questions: exam.questions.filter(i => i.id !== questionID)
      });
    console.log("\x1b[31m", "Delete", "\x1b[0m" + questionID);
  };

  return (
    <Provider
      value={{
        add_question,
        update_question,
        delete_question
      }}
    >
      {props.children}
    </Provider>
  );
};

export { QuestionProvider, QuestionContext };
