import React, { useState, useEffect } from 'react';
import Question from './Question';
import Option from './Option';
//import './Quiz.css'; // Assurez-vous d'importer le fichier CSS de style

function Quiz({ questions }) {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    // Mélanger les questions au chargement initial
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Sélectionnez les 25 premières questions mélangées
    const selectedQuestions = shuffled.slice(0, 25);
    setShuffledQuestions(selectedQuestions);
  }, [questions]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleOptionSelect = (selected) => {
    const correct = selected === currentQuestion.correctAnswer;
    setSelectedOption(selected);

    if (!correct) {
      setCorrectAnswer(currentQuestion.correctAnswer);
    }

    // Met à jour le score si la réponse est correcte
    if (correct) {
      setScore(score + 1);
    }

    // Passer à la question suivante après un délai (à des fins de démonstration).
    setTimeout(() => {
      setSelectedOption(null);
      setCorrectAnswer(null);

      if (currentQuestionIndex + 1 < shuffledQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Toutes les questions ont été posées, définissez quizComplete sur true
        setQuizComplete(true);
      }
    }, 1000);
  };

  const handleRestartQuiz = () => {
    // Remélanger les questions et réinitialiser l'état du quiz
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Sélectionnez les 25 premières questions mélangées
    const selectedQuestions = shuffled.slice(0, 25);
    setShuffledQuestions(selectedQuestions);

    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCorrectAnswer(null);
    setScore(0);
    setQuizComplete(false);
  };

  return (
    <div className="quiz">
      <h1>MonQuiz_Game</h1>
      <div className="score">Score: {score}/{shuffledQuestions.length} </div>
      {quizComplete ? (
        <div className="quiz-complete">
          FIN DU JEU
          <button onClick={handleRestartQuiz} className="btn btn-primary">
            Rejouer
          </button>
        </div>
      ) : (
        <React.Fragment>
          {currentQuestion ? (
            <Question
              question={currentQuestion.question}
              options={currentQuestion.options}
              onSelect={handleOptionSelect}
            />
          ) : null}
          <div className="options">
            {currentQuestion &&
              currentQuestion.options.map((option, index) => (
                <Option
                  key={index}
                  option={option}
                  isSelected={selectedOption === option}
                  isCorrect={correctAnswer === option}
                  isIncorrect={!correctAnswer && selectedOption === option}
                  correctAnswer={correctAnswer}
                />
              ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Quiz;
