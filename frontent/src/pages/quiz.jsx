import React, { useState } from 'react';

const QuizPage = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    // Add more questions here...
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionChange = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex === null) return;
      if (questions[questionIndex].options[answerIndex] === questions[questionIndex].correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Quiz Time!</h1>
      <div className="progress mb-3">
        <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      {currentQuestion < questions.length ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Question {currentQuestion + 1}</h5>
            <p className="card-text">{questions[currentQuestion].question}</p>
            <form>
              {questions[currentQuestion].options.map((option, optionIndex) => (
                <div className="form-check" key={optionIndex}>
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`question-${currentQuestion}-option-${optionIndex}`}
                    checked={answers[currentQuestion] === optionIndex}
                    onChange={() => handleOptionChange(optionIndex)}
                    disabled={answers[currentQuestion] !== null}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`question-${currentQuestion}-option-${optionIndex}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </form>
            {answers[currentQuestion] !== null && (
              <button className="btn btn-primary mt-3" onClick={handleNextQuestion}>Next Question</button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h3>Quiz Completed!</h3>
          <p>Your Score: {calculateScore()} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
