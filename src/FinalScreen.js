import React from "react";

import './styles/WelcomeScreen.scss';

const FinalScreen = props => {
  return (
    <section className="WelcomeScreen">
      <article className="welcome-background">
        <div className="welcome-content">
          <span className="welcome-subHeader">Good Job</span>
          <h2>Here are the results of your quiz</h2>
          <p>Correct Cards: <span>{props.correctCards.length}/30</span></p>
          <button className="welcome-btn" onClick={props.finalBtn}><i className="fas fa-umbrella-beach"></i> Try Again</button>
        </div>
      </article>
    </section>
  );
};

export default FinalScreen;
