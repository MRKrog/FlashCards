import React from "react";


const Header = props => {
  return (
    <header className="App-header">
      <h1><i className="far fa-window-restore"></i> Flash Cards</h1>
      <h4><i className="fas fa-question"></i> Correct Guesses: <span>0</span></h4>
    </header>
  );
};

export default Header;
