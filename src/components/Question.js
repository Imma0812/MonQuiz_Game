import React from 'react';

function Question({ question, options, onSelect }) {
  return (
    <div className="question">
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <div
            key={index}
            className="option"
            onClick={() => onSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
