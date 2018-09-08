import React, { Component } from 'react';
import ControlledCardNumberInput from '../ControlledCardNumberInput';
import './CardNumberHolder.css';

class CardNumberHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            normalizedNumber: ''
        }
    }

    static displayName = 'Card number formatting';

    handleNumberChange = event => {
        const inputValue = event.target.value;
        const formattingValue = this.format(inputValue);

        this.setState({
            cardNumber: formattingValue,
            normalizedNumber: this.normalize(formattingValue)
        });
    };

    format = value => {
        if (value === null) {
            return '';
        }
        const newValue = value.toString();
        const modified = newValue
            .replace(/[^\dA-Z]/g, '')
            .replace(/(.{4})/g, '$1 ')
            .trim();

        return modified;
    };

    normalize = value => {
        const normalizeValue = value.replace(/\s/g, '').trim();

        return normalizeValue;
    };

    render() {
        return (
            <div>
                <ControlledCardNumberInput
                    number={this.state.cardNumber}
                    handleChange={this.handleNumberChange}
                />
            </div>
        );
    }
}

export default CardNumberHolder;
