// Import components
import React, { Component } from 'react';
import ModalContainer from './containers/ModalContainer';
import ModalSummoner from './containers/ModalSummoner';

// Import styles and icon
import './App.css';
import ModalIcon from './modal.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Add container to hold modals in */}
        <ModalContainer />

        <header>
          <img src={ModalIcon} alt="" />
          <h1>React Redux Modal</h1>
        </header>

        <main>
          {/* Include a component used to display modals for this tutorial */}
          <ModalSummoner />
        </main>

        <footer>
          <ul>
            <li>Icons from the Noun Project</li>
            <li>Confirm Modal by Ben Iconator</li>
            <li>Email by Lorena Salagre</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
