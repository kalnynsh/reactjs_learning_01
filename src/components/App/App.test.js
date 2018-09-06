import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const wrapper = shallow(<App />);

// describe('Test App', () => {
//   describe('Render App components', () => {
//     it('has div tag with css class App', () => {
//       expect(wrapper.find('div.App')).toHaveLength(1);
//     });

//     it('has p tag with css class description', () => {
//       expect(wrapper.find('div.App p.description')).toHaveLength(1);
//     });

//     it('has p.description with text: Peace everyone', () => {
//       expect(wrapper.find('div.App p.description').text()).toEqual(
//         'Peace everyone.'
//       );
//     });
//   });
// });
