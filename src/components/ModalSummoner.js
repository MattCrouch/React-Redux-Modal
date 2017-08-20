import React, { Component } from 'react';

import './ModalSummoner.css';

class ModalSummoner extends Component {
    constructor() {
        super();

        this.buttons = [];
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.modalShowing !== nextProps.modalShowing) {
            if(nextProps.modalShowing) {
                this.buttons.forEach(button => {
                    button.setAttribute('inert', '');
                });
            } else {
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
                <button
                    className="ModalSummoner__button"
                    ref={button => button && this.buttons.push(button)}
                    onClick={this.props.showMailingListModal}
                >
                    Mailing List Prompt
                </button>
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