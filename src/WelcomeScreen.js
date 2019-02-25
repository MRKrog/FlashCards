import React from "react";

import './styles/WelcomeScreen.scss';

const WelcomeScreen = props => {
  if(props.localStorageExist){
    return (
      <section className="WelcomeScreen">
        <article className="welcome-background">
          <div className="welcome-content">
            <span className="welcome-subHeader">Welcome Back</span>
            <h2>Take A Moment To Relax</h2>
            <p>When you're ready, press continue, to finish the quiz.</p>
            <button className="welcome-btn" onClick={props.startQuiz}><i className="fas fa-umbrella-beach"></i> Continue Quiz</button>
          </div>
        </article>
      </section>
    );
  } else {
    return (
      <section className="WelcomeScreen">
        <article className="welcome-background">
          <div className="welcome-content">
            <span className="welcome-subHeader">Welcome To</span>
            <h2>Relaxing <i>Memoize</i> Flash Cards</h2>
            <p>Lets take a brief moment to relax, and once your ready, Press Start (Quiz yourself on HTML, CSS, &amp; Javascript Knowledge).</p>
            <button className="welcome-btn" onClick={props.startQuiz}><i className="fas fa-umbrella-beach"></i> Start Quiz</button>
          </div>
        </article>
      </section>
    );
  }
};

export default WelcomeScreen;
