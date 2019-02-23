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
      allInventory: []
    }
  }

  componentWillMount() {
    // console.log('hello')
    this.setState({
      player: false
    });
  }

  toggleCat = el => {
    alert('hello')
    this.setState({
      player: false
    });
  };


  render() {


    return (
      <div className="App">
        <header className="App-header">

        </header>

        <main className="main-content">
          <h1>Flash Cards</h1>
          <CardContainer allCards={this.state.allCards} />
          <button>Start</button>
        </main>

        <footer className="App-footer">
          <p>&copy; 2019</p>
        </footer>
      </div>
    );
  }

}

export default App;
