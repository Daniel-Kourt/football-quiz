import data from '../data/data.json';

export const QUIZ_LENGTH = 10;

export const selectQuestions = () => {

    const selectedQuestions = [];

    while( selectedQuestions.length < QUIZ_LENGTH ) {
        
        let r = Math.floor(Math.random() * data.questions.length);
        if(selectedQuestions.indexOf(r) === -1) {
            selectedQuestions.push(r);
        }
    }

    return selectedQuestions;

}