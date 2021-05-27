import React from 'react';
import { QUIZ_LENGTH } from '../utils/selectQuestions';

const Finish = ({ restart, score }) => {

    const renderMessage = () => {
        let message;
        if (score > 8) {
            message = "You're a football legend!";
        }
        else if (score > 4) {
            message = "You like football. Keep watching!";
        }
        else {
            message = "Obviously, football is not your favorite sport!";
        }
        return message;
    }

    return (
        <div className="px-4">

            <h3 className="pb-8 text-3xl uppercase">
                Quiz End
            </h3>

            <p className="pb-4">
                Correct Answers: {score}/{QUIZ_LENGTH}
            </p>

            <p className="text-yellow-600 pb-2 px-4">
                {renderMessage()}
            </p>

            <div 
                onClick={restart}
                className="bg-blue-500 hover:bg-blue-600 px-8 mt-8 mx-12 text-white py-3 rounded-lg outline-none uppercase cursor-pointer"
            >
                Play Again
            </div>
        </div>
    )
}

export default Finish
