import React from 'react';
import { AuthorizeProvider } from './AuthorizeProvider';
import { shallow } from 'enzyme';

describe('AuthorizeProvider', () => {
    describe('Init component', () => {
        const wrapper = shallow(<AuthorizeProvider />);

        it('has state init field `isAuthorized: false`', () => {
            expect(wrapper.state()).toEqual({ isAuthorized: false });
        });

        it('has method authorizeUser', () => {
            expect(wrapper.instance().authorizeUser).toBeDefined();
        });
    });

    describe('behavior authorizeUser method', () => {
        const wrapper = shallow(<AuthorizeProvider />);

        it('return true with login=`student@example.com` and password=`121314`' , () => {
            expect(wrapper.instance().authorizeUser('student@example.com', '121314')).toBeTruthy();
        });

        it('return false with login=`student` and password=`921314`' , () => {
            expect(wrapper.instance().authorizeUser('student', '921314')).toBeFalsy();
        });

        it('set state {isAuthorized: true} with login=`student@example.com` and password=`121314`' , () => {
            wrapper.instance().authorizeUser('student@example.com', '121314');
            expect(wrapper.state()).toEqual({ isAuthorized: true });
        });
    });
});