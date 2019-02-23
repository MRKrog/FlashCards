import React, { Component } from 'react';
import BtnAnswer from './BtnAnswer.js'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: false
    }
  }

  render() {
    const answerArray = this.props.singleCard.answers;

    const cardAnswers = answerArray.map((answer) =>
        <BtnAnswer answer={answer} key={answer} />
    )

    return (
      <div>
        <h3>{this.props.singleCard.question}</h3>
        <ul>{cardAnswers}</ul>
      </div>
    )
  }

}


export default Card;
