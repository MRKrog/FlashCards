import React, { Component } from 'react';

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
      originCards: [],
      allCards: [],
      correctCards: [],
      currCardIndex: 0,
      localStorageExist: false,
      cardsLeft: 0
    }
  }

  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/mkCards")
    .then(response => response.json())
    .then(fetchCards => {
      this.setState({
        originCards: fetchCards.mkCards,
        allCards: fetchCards.mkCards
      }, () => { this.getFromLocalStorage() });
    })
    .catch(error => {
      throw new Error(error);
    });
  }

  getFromLocalStorage = () => {
    if(localStorage.length > 0){
      const cardOrigins = this.state.allCards
      const correctArray = JSON.parse(localStorage.getItem('correctQuestions'));
      this.setState({
        correctCards: correctArray,
        localStorageExist: true
      }, () => { this.saveCardOrigins() });
    }

  }

  saveCardOrigins = () => {
    const originalCards = this.state.allCards;
    this.setState({
      originCards: originalCards
    }, () => { this.removeCorrectCards() })

  }

  removeCorrectCards = () => {
    console.log('afe', this.state.originCards);
    const { allCards, correctCards, originCards } = this.state;
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
      currentPlayer: true,
    })
  }

  resetQuiz = () => {
    localStorage.clear();
    this.setState({
      currentPlayer: false,
      localStorageExist: false,
    })

  }

  render() {
    const { allCards, currCardIndex, localStorageExist } = this.state;

    let displayContent;

    if(this.state.currentPlayer === false) {
      displayContent = <WelcomeScreen localStorageExist={localStorageExist}
                                      startQuiz={this.startQuiz} />
    } else {
      displayContent = <CardContainer currentCard={allCards[currCardIndex]}
                                      onChangeCard={this.handleChangeCard} />
    }

    console.log(this.state);
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
