import React from 'react';
import { ReactComponent as FootballSvg } from '../logo.svg';

const Start = ({ startQuiz }) => {
    return (
        <div>
            <div className="w-full mb-8">
                <FootballSvg className="mx-auto"/>
            </div>

            <h2>Test your knowledge about football</h2>
            
            <div 
                className="bg-blue-500 hover:bg-blue-600 mt-8 mx-12 text-white py-3 rounded-lg outline-none uppercase cursor-pointer" 
                onClick={startQuiz}
            >
                Start
            </div>
        </div>
    )
}

export default Start
