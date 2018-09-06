import React, {PureComponent} from 'react';
import './NewsPost.css';
import Comment from '../Comment';

let commentID = 1;

function getCommentID () {

    return ++commentID;
}

class NewsPost extends PureComponent {
    state = {
        commentInput: '',
        comments: [
            {
                id: 1,
                body: 'test'
            }
        ]
    };

    handleChange = event => {
        const commentText = event.target.value;
        this.setState({commentInput: commentText});
    };

    handleKeyDown = event => {
        if (event.keyCode === 13) {
            const {commentInput, comments} = this.state;
            const newComment = {id: getCommentID(), body: commentInput};
            this.setState(state => ({
                commentInput: '',
                comments: [...comments, newComment]
            }));
        }
    };

    handleDeleteNews = () => {
        const {id, onDeleteNews} = this.props;
        onDeleteNews(id);
    };

    handleDeleteComment = id => {
        this.setState(state => ({
            comments: state.comments.filter(
                    commentItem => id !== commentItem.id
                )
        }));
    };

    render() {
        const {id, text} = this.props;
        const {comments} = this.state;

        return (
            <div className="news-container">
                <div className="news-input">
                    <p key={id} data-id={id}>
                        {text}
                        <span
                            className="delete-button"
                            onClick={this.handleDeleteNews}>
                            X
                        </span>
                    </p>
                    <label>
                        Add comment:
                        <input type="text" className="comment-input"
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />
                    </label>
                </div>
                <div className="comment-container">
                    {comments.map( commentItem => (
                        <Comment
                            key={commentItem.id}
                            id={commentItem.id}
                            text={commentItem.body}
                            onDeleteComment={this.handleDeleteComment}
                        />))

                    }
                </div>
            </div>
        );
    }
}

export default NewsPost;
