import React, { Component } from 'react';
import ModalContainer from './containers/ModalContainer';
import ModalSummoner from './containers/ModalSummoner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalContainer />

        <header>
          <h1>React Redux Modal</h1>
        </header>

        <main>
          <ModalSummoner />
        </main>
      </div>
    );
  }
}

export default App;
