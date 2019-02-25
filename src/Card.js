import React, { Component } from 'react';
import BtnAnswer from './BtnAnswer.js'

import './styles/Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const answerArray = this.props.currentCard.answers;
    const cardQuestion = this.props.currentCard.question;

    const cardAnswers = answerArray.map((answer) =>
        <BtnAnswer key={answer}
                   answer={answer}
                   onChangeCard={this.props.onChangeCard}
        />
    );

    return (
      <article className="Card">
        <section className="Card-question">
          <h3>{cardQuestion}</h3>
        </section>
        <section className="Card-answers">
          {cardAnswers}
        </section>
      </article>
    )
  }
}


export default Card;
