import React, { Component } from 'react';
import Card from './Card.js'

import './styles/CardContainer.scss';

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentCard = this.props.currentCard;

    return (
      <section className="CardContainer">
        <Card key={currentCard.id}
              currentCard={currentCard}
              onChangeCard={this.props.onChangeCard}

        />
      </section>
    )
  }

}


export default CardContainer;
