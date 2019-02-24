import React from "react";


const WelcomeBtn = props => {
  const quizBtn = props.localStorageExist === true ? 'Continue Quiz' : 'Start Quiz';
  return (
    <section className="WelcomeBtn">
      <button className="welcome-btn" onClick={props.startQuiz}>{quizBtn}</button>
    </section>
  );
};

export default WelcomeBtn;
