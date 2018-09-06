import React from 'react';
import {shallow} from 'enzyme';
import Comment from './Comment';

describe('Comment component', () => {
  const onDeleteMock = jest.fn();
  const wrapper = shallow(
    <Comment key={1} id={1} onDeleteComment={onDeleteMock} text={'test'} />
  );

  describe('test render', () => {
    it('contain div.comment-container', () => {
      expect(wrapper.find('div.comment-container')).toHaveLength(1);
    });
    it('contain span with CSS class delete-button', () => {
      expect(wrapper.find('span.delete-button')).toHaveLength(1);
    });
    it('contain span.comment-body with text from props', () => {
      expect(wrapper.find('span.comment-body').contains('test')).toBeTruthy();
    });
  });

  describe('test callbacks', () => {
    it('call callback onDelete on click', () => {
      wrapper.find('span.delete-button').simulate('click');
      expect(onDeleteMock).toHaveBeenCalledTimes(1);
    });

    it('have correct arguments', () => {
      wrapper.find('span.delete-button').simulate('click');
      expect(onDeleteMock).toBeCalledWith(1);
    });
  });

  describe('check presence of instance methods', () => {
    it('have handleDelete method', () => {
      expect(wrapper.instance().handleDelete).toBeDefined();
    });
  });
});
