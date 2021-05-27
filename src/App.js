import { useState } from 'react';
import { Start, Quiz, Finish } from './components';
import { selectQuestions } from './utils/selectQuestions';
import './App.css';

function App() {

  const [step, setStep] = useState('start');
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [score, setScore] = useState(null);

  const startQuiz = () => {
    let questions = selectQuestions();
    setSelectedQuestions(questions);
    console.log(questions);
    setStep('quiz');
  }

  const finishQuiz = (score) => {
    setStep('end');
    setScore(score);
  }

  const restartQuiz = () => {
    setStep('start');
    setSelectedQuestions([]);
  }

  return (
    <div className="App text-blue-500 text-xl font-bold mx-auto">
      <div className="box bg-gray-100 rounded-xl shadow-lg w-4/5 max-w-xl">

      {step === 'start' && 
        <Start startQuiz={startQuiz} /> 
      }

      {step === 'quiz' && 
        <Quiz selectedQuestions={selectedQuestions} finishQuiz={finishQuiz} /> 
      }

      {step === 'end' && 
        <Finish restart={restartQuiz} score={score} /> 
      }

      </div>
    </div>
  );
}

export default App;
