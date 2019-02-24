import React, { Component } from 'react';

import './styles/BtnAnswer.scss';

class BtnAnswer extends Component {
  constructor(props) {
    super(props);
  }

  handleChangeCard = () => {
    this.props.onChangeCard(this.props.answer);
  }

  render() {
    const cardAnswer = this.props.answer;

      return (
        <div className="BtnAnswer">
          <button onClick={this.handleChangeCard}>{cardAnswer}</button>
        </div>
      )
  }
}


export default BtnAnswer;
