import React, { Component } from 'react';

import Header from './Header.js';
import WelcomeScreen from './WelcomeScreen.js';
import FinalScreen from './FinalScreen.js';
import CardContainer from './CardContainer.js';
import Footer from './Footer.js';

import './styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayer: false,
      originCards: [],
      allCards: [],
      correctCards: [],
      currCardIndex: 0,
      localStorageExist: false
    }
  }

  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/mkCards")
    .then(response => response.json())
    .then(fetchCards => {
      this.setState({
        allCards: fetchCards.mkCards
      }, () => { this.getFromLocalStorage() });
    })
    .catch(error => {
      throw new Error(error);
    });
  }

  getFromLocalStorage = () => {
      const [...cardOrigins] = this.state.allCards;
      let correctArray;
      let localStoreState;
      if (localStorage.length > 0) {
        correctArray = JSON.parse(localStorage.getItem('correctQuestions'));
        localStoreState = true;
      } else {
        correctArray = [];
        localStoreState = false;
      }
      this.setState({
        originCards: cardOrigins,
        correctCards: correctArray,
        localStorageExist: localStoreState
      }, () => { this.removeCorrectCards() });
  }

  removeCorrectCards = () => {
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

  resetQuiz = () => {
    localStorage.clear();
    this.setState({
      currentPlayer: false,
      localStorageExist: false,
      correctCards: [],
      allCards: this.state.originCards,
      currCardIndex: 0
    })
  }

  render() {
    const { allCards, currCardIndex, localStorageExist, currentPlayer } = this.state;

    let displayContent;
    if(currCardIndex === allCards.length) {
      displayContent = <FinalScreen correctCards={this.state.correctCards}
                                    finalBtn={this.resetQuiz} />
    } else if(currentPlayer === false) {
      displayContent = <WelcomeScreen localStorageExist={localStorageExist}
                                      startQuiz={this.startQuiz} />
    } else {
      displayContent = <CardContainer currentCard={allCards[currCardIndex]}
                                      onChangeCard={this.handleChangeCard} />
    }

    return (
      <div className="App">
        <Header correctCards={this.state.correctCards}/>
        <main className="main-content">
          {displayContent}
        </main>
        <Footer resetQuiz={this.resetQuiz}
                currentPlayer={this.state.currentPlayer}
              />
      </div>
    )
  }
}

export default App;
