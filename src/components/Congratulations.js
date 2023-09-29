import React, { useEffect, useState } from 'react';

function Congratulations({ score, totalQuestions }) {
  const [animationClass, setAnimationClass] = useState('');

  // Déclencher l'animation lorsque le composant est monté
  useEffect(() => {
    setAnimationClass('animate-congratulations');
  }, []);

  return (
    <div className={`congratulations ${animationClass}`}>
      <h2>Congratulations!</h2>
      <p>You've completed the quiz.</p>
      <p>Your score: {score}/{totalQuestions}</p>
      <p>Well done!</p>
    </div>
  );
}

export default Congratulations;
