import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { UserContext } from "./user-context";

const QuestionContext = React.createContext();
const { Provider } = QuestionContext;

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
            question: item.question,
            answer: item.answer,
            status: "",
            creation_date: moment().format()
          }
        ])
      });
  }
  update_question = (exam, itemQ, newItem) => {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection("exams")
      .doc(exam.id)
      .update({
        questions: exam.questions
          .filter(i => i.question !== itemQ)
          .concat([
            {
              question: newItem.question,
              answer: newItem.answer,
              status: newItem.status,
              creation_date: moment().format()
            }
          ])
      });
  };
  delete_item = item => {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .collection(item.type + "s")
      .doc(item.id)
      .delete()
      .then(() => setCurrentItem({ title: "" })),
      console.log("\x1b[31m", "Delete", "\x1b[0m" + item.id);
  };

  return (
    <Provider
      value={{
        add_question,
        update_question,
        delete_item
      }}
    >
      {props.children}
    </Provider>
  );
};

export { QuestionProvider, QuestionContext };
