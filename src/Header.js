import React from "react";

const Header = props => {

  return (
    <header className="App-header">
      <h1><i className="far fa-window-restore"></i> Flash Cards</h1>
      <h4>Correct Cards: <span>{props.correctCards.length}/30</span></h4>
    </header>
  );
};

export default Header;
