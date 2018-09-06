import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import NewsPost from '../NewsPost';
import Comment from '../Comment';

describe('NewsPost component', () => {
    describe('test render input and p', () => {
      const wrapper = shallow(<NewsPost id={1} text={'test'} />);

      it('contain input', () => {
        expect(wrapper.find('input.comment-input')).toHaveLength(1);
      });
      it('contain p with text', () => {
        expect(wrapper.find('.news-input p')).toHaveLength(1);
        expect(wrapper.find('.news-input p').contains('test')).toBeTruthy();
      });
    });

    describe('check presence of instance methods', () => {
      const wrapper = shallow(<NewsPost id={1} text={'test'} />);
      it('contain instance method handleChange', () => {
        expect(wrapper.instance().handleChange).toBeDefined();
      });

      it('contain instance method handleKeyDown', () => {
        expect(wrapper.instance().handleKeyDown).toBeDefined();
      });

      it('contain instance method handleDeleteNews', () => {
        expect(wrapper.instance().handleDeleteNews).toBeDefined();
      });

      it('contain instance method handleDeleteComment', () => {
        expect(wrapper.instance().handleDeleteComment).toBeDefined();
      });
    });

    describe('check state content', () => {
      const wrapper = shallow(<NewsPost id={1} text={'test'} />);
      it('contain comments array', () => {
        expect(wrapper.state().comments).toEqual([{id: 1, body: 'test'}]);
      });
      it('contain commentInput with empty string', () => {
        expect(wrapper.state().commentInput).toEqual('');
      });
    });

    describe('check callbacks', () => {
      it('save from input to state.commentInput', () => {
        const wrapper = shallow(<NewsPost id={1} text={'test'} />);
        wrapper.find('input.comment-input')
            .simulate(
                'change',
                {target: {value: 10}}
            );
        wrapper.update();
        expect(wrapper.state().commentInput).toEqual(10);
      });

      it('create new comment from value state.commentInput on press enter',
      () => {
        const wrapper = shallow(<NewsPost id={1} text={'test'} />);
        wrapper
            .find('input.comment-input')
            .simulate(
                'change',
                {target: {value: 10}}
            );
        wrapper.update();
        wrapper
            .find('input.comment-input')
            .simulate(
                'keyDown',
                {keyCode: 13}
            );
        expect(wrapper.state().commentInput).toEqual('');
        expect(wrapper.state().comments[1].body).toEqual(10);
      });

      it('delete comment on call handleDelete', () => {
        const wrapper = shallow(<NewsPost id={1} text={'test'} />);
        wrapper
            .find('input.comment-input')
            .simulate('change', {target: {value: 10}});
        wrapper.update();
        wrapper.find('input.comment-input').simulate('keyDown', {keyCode: 13});
        wrapper.instance().handleDeleteComment(wrapper.state().comments[1].id);
        wrapper.update();
        expect(wrapper.state().comments).toEqual([
          {
            id: 1,
            body: 'test'
          }
        ]);
      });
    });

    describe('check Comments rendering', () => {
      it('render Comment component on create new comment', () => {
        const wrapper = shallow(<NewsPost id={1} text={'test'} />);
        wrapper.find('input.comment-input')
            .simulate(
                'change',
                {
                    target: {
                        value: 10
                    }
                }
            );
        wrapper.update();
        wrapper.find('input.comment-input').simulate('keyDown', {keyCode: 13});
        wrapper.update();
        const commentFromState = wrapper.state().comments[1];
        expect(
          wrapper.contains(
            <Comment
              key={commentFromState.id}
              id={commentFromState.id}
              text={commentFromState.body}
              onDeleteComment={wrapper.instance().handleDeleteComment}
            />
          )
        ).toBeTruthy();
      });
    });
  });
