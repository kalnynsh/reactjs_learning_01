import React, {PureComponent} from 'react';
import './Comment.css';

class Comment extends PureComponent {
    handleDelete = () => {
      const {id, onDeleteComment} = this.props;
      onDeleteComment(id);
    };

    render() {
      const {id, text} = this.props;

      return (
        <div
          className="comment-container"
          data-id={id}
          key={id}>
          <span className="comment-body">{text}</span>
          <span
            onClick={this.handleDelete}
            className="delete-button"
          >
            X
          </span>
        </div>
      );
    }
  }

export default Comment;
