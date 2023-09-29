import React from 'react';

function Option({ option, isSelected, isCorrect, isIncorrect, correctAnswer }) {
  const optionClass = `option ${isSelected ? 'selected' : ''} 
    ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`;

  return (
    <div className={optionClass}>
      {option}
      {isIncorrect && <span className="correct-answer"></span>}
    </div>
  );
}

export default Option;
