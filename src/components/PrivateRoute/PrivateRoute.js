import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthHOC } from '../AuthorizeProvider';

class PrivateRoute extends PureComponent {
    render () {
        const { component: Component, isAuthorized, ...rest } = this.props;

        return (
            <Route
                isAuthorized={isAuthorized}
                {...rest}
                render={props =>
                    isAuthorized
                    ? <Component {...props} />
                    : <Redirect to="/login" />
                }
            />
        );
    }
}

export default AuthHOC(PrivateRoute);
