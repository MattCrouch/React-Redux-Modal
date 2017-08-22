// Import React
import React, { Component } from 'react';

// Import styles
import './ModalSummoner.css';

class ModalSummoner extends Component {
    constructor() {
        super();

        // Store button Refs for inert control
        this.buttons = [];
    }

    // Detect when a modal is showing or not
    componentWillReceiveProps(nextProps) {
        if (this.props.modalShowing !== nextProps.modalShowing) {
            if(nextProps.modalShowing) {
                // Make sure each button is not focusable
                this.buttons.forEach(button => {
                    button.setAttribute('inert', '');
                });
            } else {
                // Make each button focusable by default
                this.buttons.forEach(button => {
                    button.removeAttribute('inert');
                });
            }
        }
    }

    render() {
        // Reset refs as it will continue to store older versions
        this.buttons = [];

        return (
            <div className="ModalSummoner">
                <h2>Choose a dialog to open</h2>

                {/* Display a custom component to prompt for an email address */}
                <button
                    className="ModalSummoner__button"
                    ref={button => button && this.buttons.push(button)}
                    onClick={this.props.showMailingListModal}
                >
                    Mailing List Prompt
                </button>

                {/* Show a generic component that can be customised as needed */}
                <button
                    className="ModalSummoner__button"
                    ref={button => button && this.buttons.push(button)}
                    onClick={this.props.showInfoModal}
                >
                    Customisable "Info" Modal
                </button>
            </div>
        );
    }
}

export default ModalSummoner;