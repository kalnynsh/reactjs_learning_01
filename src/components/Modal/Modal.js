import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

/**
 * Class Modal renders Modal window onClick gives from props
 */
class Modal extends PureComponent {
    render() {
        const { hideModal } = this.props;

        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal__fog">
                    <div className="modal__body">
                        <h2>Modal window</h2>
                        <button onClick={hideModal}>Close</button>
                    </div>
                </div>
            </div>,
            document.querySelector('#portal')
        );
    }
}

export default Modal;
