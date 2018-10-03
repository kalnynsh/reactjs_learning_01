import React from 'react';
import App from '../App';
import Market from '../../Market';
import Farm from '../../Farm';
import Budget from '../../Budget';
import { shallow } from 'enzyme';

describe('Component App', () => {
  const wrapper = shallow(<App />);
  it('Component has <Market/>', () => {
    expect(wrapper.contains(<Market />)).toBeTruthy();
  });
  it('Component has <Farm/>', () => {
    expect(wrapper.contains(<Farm />)).toBeTruthy();
  });
  it('Component has <Budget/>', () => {
    expect(wrapper.contains(<Budget />)).toBeTruthy();
  });
});
