import React, { Component } from 'react';
import CardContainer from './CardContainer.js'
import MockData from './mockData.js'

import './styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: true,
      allCards: MockData.cards,
      correctCards: [],
      wrongCards: [],
      currCardIndex: 0
    }
  }

  componentWillMount() {
    // console.log('hello')
    // this.setState({
    //   player: false
    // });
  }

  toggleCat = el => {
    alert('hello')
    this.setState({
      player: false
    });
  };

  handleChangeCard = (clickedAnswer) => {
    const currentCard = this.state.allCards[this.state.currCardIndex];
    let currIndex = this.state.currCardIndex;
    if(currentCard.correctAnswer === clickedAnswer){
      this.state.correctCards.push(currentCard)
    } else {
      this.state.wrongCards.push(currentCard)
    }
    currIndex++;
    this.changeIndex(currIndex)
  }

  changeIndex = (currIndex) => {
    console.log('current index', currIndex);
    this.setState({
      currCardIndex: currIndex
    })
  }




  render() {
    const allCards = this.state.allCards;
    const currCardIndex = this.state.currCardIndex;
    const correctCards = this.state.correctCards;
    const wrongCards = this.state.wrongCards;

    console.log('current state ', this.state);
    console.log('currCard ', allCards[currCardIndex]);
      // <button>Start</button>
    return (
      <div className="App">
        <header className="App-header">
          <h1>Flash Cards</h1>
        </header>

        <main className="main-content">

          <CardContainer key={currCardIndex}
                         currentCard={allCards[currCardIndex]}
                         onChangeCard={this.handleChangeCard}
          />

        </main>

        <footer className="App-footer">
          <p>&copy; 2019</p>
        </footer>
      </div>
    );
  }

}

export default App;
