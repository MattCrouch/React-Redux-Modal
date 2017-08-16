import React, { Component } from 'react';

import './ModalOptions.css';

function ModalOptions(props) {
  return (
    <div className="ModalOptions">
      {props.children}
    </div>
  );
}

export default ModalOptions;