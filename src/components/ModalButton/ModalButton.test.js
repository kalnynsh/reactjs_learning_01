import React from 'react';
import { shallow } from 'enzyme';
import ModalButton from './ModalButton';
import Modal from '../Modal';

describe('ModalButton', () => {
    const wrapper = shallow(<ModalButton />);

    describe('state', () => {
        it('has default state.isModalVisible - false', () => {
            expect(wrapper.state().isModalVisible).toEqual(false);
        });
    });

    describe('metods', () => {
        it('has toggleModal', () => {
            expect(wrapper.instance().toggleModal).toBeDefined();
        });
        it('toggle state.isModalVisible to false', () => {
            wrapper.setState({isModalVisible: true});
            wrapper.instance().toggleModal();
            wrapper.update();
            expect(wrapper.state().isModalVisible).toBeFalsy();
        });
        it('toggle state.isModalVisible to true', () => {
            wrapper.setState({isModalVisible: false});
            wrapper.instance().toggleModal();
            wrapper.update();
            expect(wrapper.state().isModalVisible).toBeTruthy();
        });
    });

    describe('render', () => {
        it('show Modal on state.isModalVisible - true', () => {
            wrapper.setState({isModalVisible: true})
            wrapper.update();

            expect(wrapper.find(Modal)).toHaveLength(1);
        });
    });
});
