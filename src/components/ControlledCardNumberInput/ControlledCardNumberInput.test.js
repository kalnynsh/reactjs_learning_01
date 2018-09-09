import React from 'react';
import { shallow } from 'enzyme';
import ControlledCardNumberInput from './';

describe('Component ControlledCardNumberInput', () => {
    const wrapper = shallow(<ControlledCardNumberInput />);

    describe('methods', () => {
        describe('render', () => {
            it('has input data-input="card-number-input"', () => {
                expect(wrapper.find('input[data-input="card-number-input"]'))
                .toHaveLength(1);
            });
        });
    });
});
