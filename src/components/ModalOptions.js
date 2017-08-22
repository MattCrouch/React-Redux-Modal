// Import React
import React from 'react';

// Import styles
import './ModalOptions.css';

// Create a stateless component that simply applies styles to it's children
function ModalOptions(props) {
  return (
    <div className="ModalOptions">
      {/* Contents is based on it's children */}
      {props.children}
    </div>
  );
}

export default ModalOptions;