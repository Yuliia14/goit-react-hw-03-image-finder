import React, { Component } from 'react';
import './Modal.css';


export default class Modal extends Component {

    componentDidMount() {
    console.log('Modal componentDidMount')
    window.addEventListener('keydown', this.handleKeyDown)
}
    componentWillUnmount() {
    console.log('Modal componentWillUnmount')
    window.removeEventListener('keydown', this.handleKeyDown)
}

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose(e);
        }
}
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            console.log('Клик на бекдроп')
            this.props.onClose(e);
        }
    }

    render() {
        return (
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">
                    <img src={this.props.largeImageURL} alt="" />
                </div>
            </div>
            );
        }
}