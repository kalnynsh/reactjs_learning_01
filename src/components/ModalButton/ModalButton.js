import React, { Component } from 'react';
import Modal from '../Modal';

export default class ModalButton extends Component {
    state = {
        isModalVisible: false
    };

    static displayName = 'Show modal window';

    toggleModal = () => {
        this.setState(prevState => ({
            isModalVisible: !prevState.isModalVisible
        }));
    };

    render() {
        return (
            <div>
                {
                    !this.state.isModalVisible
                    && (<button onClick={this.toggleModal}>
                            Show the modal window
                        </button>)
                }
                {this.state.isModalVisible
                    && <Modal hideModal={this.toggleModal} />}
            </div>
        );
    }
}
