import React from 'react';
import { mount } from 'enzyme';

import CardNumberHolder from './';

describe('Component CardNumberHolder', () => {
    const wrapper = mount(<CardNumberHolder  />);

    describe('Class methods', () => {
        describe('format', () => {
            it('defined', ()  => {
                expect(wrapper.instance().format).toBeDefined();
            });
            it('Add spaces after each 4 digits', () => {
                [
                    ['12345', '1234 5'],
                    ['123456789123456789', '1234 5678 9123 4567 89'],
                    ['', ''],
                    [null, '']
                ].forEach(pair => {
                    it(`'${pair[0]}' -> ${pair[1]}`, () => {
                        expect(wrapper.instance().fromat(pair[0]))
                        .toEqual(pair[1]);
                    });
                });
            });
            it(`12345 -> '1234 5'`, () => {
                expect(wrapper.instance().format(12345)).toEqual('1234 5');
            });
        });

        describe('normalize', () => {
            it('Defined', () => {
                expect(wrapper.instance().normalize).toBeDefined();
            });

            describe('Remove spaces from string', () => {
                [
                    ['1234 5', '12345'],
                    ['1234 5678 9123 4567 89', '123456789123456789']
                ].forEach(pair => {
                    it(`'${pair[0]}' -> ${pair[1]}`, () => {
                        expect(wrapper.instance().normalize(pair[0]))
                        .toEqual(pair[1]);
                    })
                });
            });
        });

        describe('handleNumberChange', () => {
            it('Defined', () => {
                expect(wrapper.instance().handleNumberChange).toBeDefined();
            });
        });

        describe('render', () => {
            it('has Conponent ControlledCardNumberInput', () => {
                expect(wrapper.find('ControlledCardNumberInput'))
                .toHaveLength(1);
            });

            it('ControlledCardNumberInput has props.handleChange with CardNumberHolder.handleNumberChange', () => {
                const elem = wrapper.find('ControlledCardNumberInput');
                expect(elem.props().handleChange)
                .toEqual(wrapper.instance().handleNumberChange);
            });
        });
    });

    describe('Class state', () => {
        it('has field cardNumber', () => {
            expect(wrapper.state().cardNumber).toBeDefined();
        });
        it('has field normalizedNumber', () => {
            expect(wrapper.state().normalizedNumber).toBeDefined();
        });

        it(`cardNumber by default is ''`, () => {
            expect(wrapper.state().cardNumber).toEqual('');
        });
        it(`normalizedNumber by default is ''`, () => {
            expect(wrapper.state().normalizedNumber).toEqual('');
        });
    });
});
