import React, { useState, useEffect } from "react";
import data from "../data/data.json";

const Question = ({ numberOfQuestion, handleUserAnswer }) => {

  const activeQuestion = data.questions[numberOfQuestion];

  const initialState = {
    answered: false,
    userAnswer: null,
    correctAnswer: activeQuestion.correct - 1
  }
  
  const [check, setCheck] = useState(initialState);

  useEffect(() => {
    setCheck(initialState)    
  }, [numberOfQuestion]);

  
  const handleAnswer = (answer) => {
    
    if (!check.answered) {

      setCheck((prevCheck) => ({
        ...prevCheck,
        answered: true,
        userAnswer: answer,
      }));

      setTimeout(() => {
        handleUserAnswer(answer === check.correctAnswer);          
      }, 1000);

    }
  };

  
  const answerColor = (idx) => {
      if (!check.answered) {
          return 'bg-gray-800 hover:bg-gray-900';
      }
      else {
          if (idx === check.correctAnswer) {
            return 'bg-green-600';
          }
          else if (idx === check.userAnswer && idx !== check.correctAnswer) {
            return 'bg-red-600';
          }
          else {
              return 'bg-gray-800';
          }
      }
  }

  

  return (
    <div className="p-8 flex flex-col">

      <div className="py-2 sm:px-6 text-yellow-600">
        <h3>
          {activeQuestion.question}
        </h3>
      </div>

      <div>
        <ul>
          {activeQuestion.answers.map((answer, idx) => (
            <li
              key={idx}
              className={`${answerColor(idx)} rounded-lg text-white p-2 cursor-pointer m-4`}
              onClick={() => handleAnswer(idx)}
            >
              {answer}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Question;
