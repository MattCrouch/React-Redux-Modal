import React, { Component } from 'react';

class ModalSummoner extends Component {
  render() {
    return (
      <button onClick={this.props.showModal}>Show</button>
    );
  }
}

export default ModalSummoner;
