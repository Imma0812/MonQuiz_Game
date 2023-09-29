import React from 'react';
import Quiz from './components/Quiz';
import questions from './data/questions.json';


function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 offset-md-0">
          <div className="card bg-light">
            <div className="card-body">
              <Quiz questions={questions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App