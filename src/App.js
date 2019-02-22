import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: true,
      allInventory: []
    }
  }

  componentDidMount() {
    fetch("http://whateverly-datasets.herokuapp.com/api/v1/distributor")
      .then(response => response.json())
      .then(supplier => {
        this.setState({
          allInventory: supplier.distributor[0].inventory
        });
      })
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
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.toggleCat}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
