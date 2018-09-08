import React, {Component} from 'react';
import Title from '../Title';
import './CardForm.css';

export class CardForm extends Component {
  _isMounted = false;
  state = {};

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChangeForm = event => {
    const {name, value} = event.target;
    this.props.onChangeForm(name, value);
  }

  render() {
    const {cardNumber} = this.props;

    return (
      <div>
        <Title>Card number</Title>
        <input
          name="cardNumber"
          value={cardNumber}
          placeholder="0000000000000000"
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
