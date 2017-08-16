import React, { Component } from 'react';
import ModalContainer from './containers/ModalContainer';
import ModalSummoner from './containers/ModalSummoner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalContainer />
        
        <ModalSummoner />
      </div>
    );
  }
}

export default App;
