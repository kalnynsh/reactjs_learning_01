import React, {Component} from 'react';
import Title from '../Title';
import './PersonalForm.css';

export class PersonalForm extends Component {
  formsData = {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email'
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChangeForm = event => {
    const {name, value} = event.target;
    this.props.onChangeForm(name, value);
  };

  render() {
    return (
      <div className="personal-form" data-test="personal-form">
        <Title>Personal information</Title>
          {Object.keys(this.formsData).map(fieldname => (
            <input
              key={fieldname}
              name={fieldname}
              value={this.props[fieldname]}
              placeholder={this.formsData[fieldname]}
              onChange={this.handleChangeForm}
            />
          ))}
      </div>
    );
  }
}

export default PersonalForm;
