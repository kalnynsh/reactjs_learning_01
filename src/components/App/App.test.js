import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import NewsPost from '../NewsPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const wrapper = shallow(<App />);

describe('App component', () => {
  const wrapper = shallow(<App />);

  describe('test render', () => {
    it('has div tag with css class App', () => {
      expect(wrapper.find('div.App')).toHaveLength(1);
    });

    it('has input tag', () => {
      expect(wrapper.find('div.App div.container label input')).toHaveLength(1);
    });
  });

  describe('check existance of methods', () => {
    const wrapper = shallow(<App />);

    it('has handleChange method', () => {
      expect(wrapper.instance().handleChange).toBeDefined();
    });

    it('has handleKeyDown method', () => {
      expect(wrapper.instance().handleKeyDown).toBeDefined();
    });

    it('has handleDelete method', () => {
      expect(wrapper.instance().handleDelete).toBeDefined();
    });
  });

  describe('check state content', () => {
    const wrapper = shallow(<App />);

    it('contain news array', () => {
      expect(wrapper.state().news).toEqual([
        {id: 1, content: 'test'},
      ]);
    });

    it('contain newsInput with empty string', () => {
      expect(wrapper.state().newsInput).toEqual('');
    });
  });

  describe('check callbacks', () => {
    it('save from input to state.newsInput', () => {
      const wrapper = shallow(<App />);

      wrapper.find('input.news-input').simulate(
        'change',
        {
          target: {value: 10}
        }
      );
      wrapper.update();
      expect(wrapper.state().newsInput).toEqual(10);
    });

    it('create new post from value state.newsInput on press Enter', () => {
      const wrapper = shallow(<App />);
      wrapper.find('input.news-input').simulate(
        'change',
        {
          target: {value: 10}
        }
      );
      wrapper.update();
      wrapper.find('input.news-input').simulate('keyDown', {keyCode: 13});
      expect(wrapper.state().newsInput).toEqual('');
      expect(wrapper.state().news[1].content).toEqual(10);
    });
  });

  describe('check Comments rendering', () => {
    it('render NewsPost component on creat new post', () => {
      const wrapper = shallow(<App />);
      wrapper
        .find('input.news-input')
        .simulate('change', {target: {value: 11}});
      wrapper.update();
      wrapper
        .find('input.news-input')
        .simulate('keyDown', {keyCode: 13});
      wrapper.update();

      const newsFromState = wrapper.state().news[1];
      expect(
        wrapper.contains(
          <NewsPost
            key={newsFromState.id}
            id={newsFromState.id}
            text={newsFromState.content}
            onDeleteNews={wrapper.instance().handleDelete}
          />
        )
      ).toBeTruthy();
    });
  });
});
