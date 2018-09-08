import React, {Component} from 'react';
import './App.css';
import PersonalForm from '../PersonalForm';
import Step from '../Step';
import CardForm from '../CardForm';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    stepCorrespondance: ['Personal information', 'Card information', 'Finish']
  };

  /** Method incrise step for next Form */
  handleClickNextForm = () => {
    this.setState(state => ({
      ...state,
      step: ++state.step
    }));
  };

  /** Method set given number for step */
  handleTabClick = number => {
    this.setState(state => ({
      ...state,
      step: number
    }));
  };

  /** Method update state from passing args */
  handleChangeForm = (key, value) => {
    this.setState(state => ({
      ...state,
      [key]: value
    }));

    console.log(this.state);
  };

  /** Method validate form */
  isFormValid = () => {
    const {step, firstName, lastName, email} = this.state;
    if (step === 1) {
      if (
        firstName !== ''
        && lastName !== ''
        && email !== ''
        && email.includes('@')
      ) {
        return true;
      }
    } else if (step === 2) {
      if (this.state.cardNumber.length === 16) {
        return true;
      }
    } else {
      return false;
    }
  };

  /** Conditional rendering Form */
  renderForm = () => {
    const {step, firstName, lastName, email} = this.state;
    if (step === 1) {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (step === 2) {
      return (
        <CardForm
          cardNumber={this.state.cardNumber}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (step === 3) {
      return <p data-test="congratulations">Congratulations!</p>
    } else {
      return false;
    }
  };

  render() {
    const {stepCorrespondance, step} = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          {stepCorrespondance.map((item, id) => (
            <Step
              key={item}
              number={++id}
              isSelected={true && id === step}
              isClickable={true && id < step}
              onClick={this.handleTabClick}
            />
          ))}
        </div>
        <div className="form-content">
            {this.renderForm()}
        </div>
        <div className="button-panel">
            <button
              className="button-next"
              disabled={!this.isFormValid()}
              onClick={this.handleClickNextForm}
            >
              Next
            </button>
        </div>
      </div>
      );
  }
}

export default App;
