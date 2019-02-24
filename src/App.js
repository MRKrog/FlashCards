import React, { Component } from 'react';
import MockData from './mockData.js';

import Header from './Header.js';
import WelcomeScreen from './WelcomeScreen.js';
import CardContainer from './CardContainer.js';
import Footer from './Footer.js';

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
      this.setState({
        correctCards: correctArray,
        localStorageExist: true
      });
    }
  }

  removeCorrectCards() {
    const { allCards, correctCards } = this.state;
    correctCards.forEach((correctCard) => {
      let foundCard = allCards.find(card => card.id === correctCard.id);
      let cardIndex = allCards.indexOf(foundCard);
      allCards.splice(cardIndex, 1);
    });
  }

  handleChangeCard = (clickedAnswer) => {
    const { allCards } = this.state;
    const currentCard = allCards[this.state.currCardIndex];
    let currIndex = this.state.currCardIndex;

    if(currentCard.correctAnswer === clickedAnswer){
      this.state.correctCards.push(currentCard);
      localStorage.setItem('correctQuestions', JSON.stringify(this.state.correctCards));
    }
    currIndex++;
    this.changeCardIndex(currIndex);
  }

  changeCardIndex = (currIndex) => {
    this.setState({
      currCardIndex: currIndex
    });
  }

  startQuiz = () => {
    this.setState({
      currentPlayer: true
    })
  }

  render() {
    const { allCards, currCardIndex, localStorageExist } = this.state;

    let displayContent;

    if(this.state.currentPlayer === false) {
      this.removeCorrectCards();
      displayContent = <WelcomeScreen localStorageExist={localStorageExist}
                                   startQuiz={this.startQuiz} />
    } else {
      displayContent = <CardContainer currentCard={allCards[currCardIndex]}
                                      onChangeCard={this.handleChangeCard} />
    }

    return (
      <div className="App">
        <Header />
        <main className="main-content">
          {displayContent}
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
