import React, { Component } from 'react';
import Card from './Card.js'

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = this.props.allCards;

    const cardList = cards.map((card) =>
      <Card singleCard={card} key={card.id}/>
    )

    return (
      <div>{cardList}</div>
    )
  }

}


export default CardContainer;
