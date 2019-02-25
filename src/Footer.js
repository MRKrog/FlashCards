import React from "react";

import './styles/Footer.scss';

const Footer = props => {
  if(props.currentPlayer) {
    return (
      <footer className="App-footer">
        <div className="BtnAnswer">
          <button onClick={props.resetQuiz}>Reset Game</button>
        </div>
      </footer>
    );
  }
  return (
    <footer className="App-footer">
      <p>&copy; 2019</p>
    </footer>
  );

};

export default Footer;
