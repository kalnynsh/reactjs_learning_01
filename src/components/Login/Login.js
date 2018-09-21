import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthHOC } from '../AuthorizeProvider';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        isCredentialsChecked: false
    };

    handleChangeInput = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value } );
    };

    handleChangeSubmit = () => {
        const { authorizeUser } = this.props;
        const { email, password } = this.state;

        if (authorizeUser(email, password)) {
            this.setState(prevState => ({
                isCredentialsChecked: true
            }));
        } else {
            this.setState(prevState => ({
                isCredentialsChecked: false
            }));
        }
    };

    render() {
        const { isAuthorized } = this.props;

        return !isAuthorized ? (
            <div>
                <div>
                    <label>Email
                    <input
                        name="email"
                        placeholder="login"
                        onChange={this.handleChangeInput}
                    />
                    </label>
                    <label>Password
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.handleChangeInput}
                    />
                    </label>
                    {!this.state.isCredentialsChecked ? (
                        <p className="error">Incorrect password or email</p>
                    ) : ( '' )}
                </div>
                <button className="btn btn-primary" onClick={this.handleChangeSubmit} >
                    Submit
                </button>
            </div>
        ) : (
            <Redirect to="/" />
        );
    }
}

export default AuthHOC( Login );