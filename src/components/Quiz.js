import React, { useState, useEffect } from 'react';
import Question from './Question';

const Quiz = ({ selectedQuestions, finishQuiz }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);  // 0-9 for totally 10 questions
    const [correctAnswers, setCorrectAnswers] = useState(0);    // total correct answers

    
    const handleUserAnswer = (answer) => {        

        if (answer) {       // if user's answer is correct, correctAnswers+1
            setCorrectAnswers(prevCorrect => prevCorrect + 1);
        }
        if ( currentQuestion < selectedQuestions.length ) {
            setCurrentQuestion(current => current + 1);
        }        
    }
    
    useEffect(() => {
        if ( currentQuestion === selectedQuestions.length ) {
            finishQuiz(correctAnswers);
        }
        
    }, [currentQuestion]);

    
    return (
        <div>
            {currentQuestion < selectedQuestions.length && 
                <Question 
                    numberOfQuestion={ selectedQuestions[currentQuestion] } 
                    handleUserAnswer={ handleUserAnswer }   
                />
            }            
        </div>
    )
}

export default Quiz;
