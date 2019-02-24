import React, { Component } from 'react';
import MockData from './mockData.js'

import Header from './Header.js'
import CardContainer from './CardContainer.js';
import Footer from './Footer.js'

import './styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayer: false,
      allCards: MockData.cards,
      correctCards: [],
      currCardIndex: 0,
      localStorageExist: false
    }
  }

  componentWillMount() {
    if(localStorage.length > 0){
      const correctArray = JSON.parse(localStorage.getItem('correctQuestions'));
      console.log(correctArray);
      this.setState({
        correctCards: correctArray,
        localStorageExist: true
      });
    }
  }

  removeCorrectCards() {
    const { allCards, currCardIndex, correctCards } = this.state;
    console.log('before ', allCards);
    console.log('correctArray ', this.state);
    this.state.correctCards.forEach((correct) => {
      console.log(correct);
      let found = allCards.find(function(element) {
        return element.id === correct.id;
      });

      let cardIndex = allCards.indexOf(found);
      allCards.splice(cardIndex, 1);
    });
    console.log('after ', allCards);
  }


  handleChangeCard = (clickedAnswer) => {
    const { allCards, currCardIndex, correctCards } = this.state;
    const currentCard = allCards[this.state.currCardIndex];
    let currIndex = this.state.currCardIndex;

    if(currentCard.correctAnswer === clickedAnswer){
      this.state.correctCards.push(currentCard);
      localStorage.setItem('correctQuestions', JSON.stringify(this.state.correctCards));
    }
    currIndex++;
    this.changeIndex(currIndex);
  }

  changeIndex = (currIndex) => {
    this.setState({
      currCardIndex: currIndex
    });
  }

  startGame = () => {
    this.setState({
      currentPlayer: true
    })
  }

  render() {
    const { allCards, currCardIndex, correctCards } = this.state;


    if(this.state.currentPlayer === false){
      this.removeCorrectCards();
      const displayCard = <CardContainer key={currCardIndex}
                                         currentCard={allCards[currCardIndex]}
                                         onChangeCard={this.handleChangeCard}
                                        />

      return (
        <div className="App">
          <Header />

          <main className="main-content">
            <button onClick={this.startGame}>Start Game</button>
          </main>

          <Footer />
        </div>
      );
    } else {
      const displayCard = <CardContainer key={currCardIndex}
                                         currentCard={allCards[currCardIndex]}
                                         onChangeCard={this.handleChangeCard}
                                        />

      return (
        <div className="App">
          <Header />

          <main className="main-content">
            {displayCard}
          </main>

          <Footer />
        </div>
      );
    }

  }

}

export default App;
