import React from 'react';
import { shallow } from 'enzyme';
import Switcher from './';

describe('Switcher', () => {
    const A = () => <div />;
    A.displayName = 'A_test';
    const BComponent = () => <div />;

    const wrapper = shallow(
        <Switcher>
            <A />
            <BComponent />
        </Switcher>
    )

    wrapper.update();

    describe('state', () => {
        it('has default selectedChild = 0', () => {
            expect(wrapper.state().selectedChild).toBeDefined();
            expect(wrapper.state().selectedChild).toEqual(0);
        });
    });
    it('render only one Child', () => {
        expect(wrapper.find(A)).toHaveLength(1);
    });
    it('do not render second Child', () => {
        expect(wrapper.find(BComponent)).toHaveLength(0);
    });
    it('render second Child if state selectedChild: 1', () => {
        wrapper.setState({ selectedChild: 1 });
        wrapper.update();

        expect(wrapper.find(BComponent)).toHaveLength(1);
    });

    it('desplay child.displayName or child.name', () => {
        expect(wrapper.contains('A_test')).toBeTruthy();
        expect(wrapper.contains('BComponent')).toBeTruthy();
    });

    describe('render', () => {
        describe('has tag .component-list__name', () => {
            it('has component name', () => {
                expect(
                    wrapper
                        .find('.component-list__name')
                        .at(0)
                        .contains('A_test')
                    ).toBeTruthy();
                expect(
                    wrapper
                        .find('.component-list__name')
                        .at(1)
                        .contains('BComponent')
                    ).toBeTruthy();
            });
            it('has data-id with child`s index', () => {
                expect(wrapper.find('.component-list__name')).toHaveLength(2);
                expect(
                    wrapper
                    .find('.component-list__name')
                    .at(0)
                    .props()['data-id']
                ).toEqual(0);
                expect(
                    wrapper
                    .find('.component-list__name')
                    .at(1)
                    .props()['data-id']
                ).toEqual(1);
            });
            it('has attribute onClick with handleChangeChild',
            () => {
                expect(wrapper.find('.component-list__name')).toHaveLength(2);
                expect(
                    wrapper
                    .find('.component-list__name')
                    .at(0)
                    .props()['onClick']
                ).toEqual(wrapper.instance().handleChangeChild);
                expect(
                    wrapper
                    .find('.component-list__name')
                    .at(1)
                    .props()['onClick']
                ).toEqual(wrapper.instance().handleChangeChild);
            });
        });
    });
});
