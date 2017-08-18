import React, { Component } from 'react';

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

        return <button ref={button => button && this.buttons.push(button)} onClick={this.props.showModal}>Show</button>
    }
}

export default ModalSummoner;