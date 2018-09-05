import React, {PureComponent} from 'react';
import './index.css';

class Todo extends PureComponent {
    handleChange = () => {
        const {id, onChange} = this.props;
        onChange(id);
    };

    handleDelete = () => {
        const {id, onDelete} = this.props;
        onDelete(id);
    };

    render() {
        const {text, done} = this.props;

        return (
            <div className="todo-container">
                <input type="checkbox"
                    checked={done}
                    onChange={this.handleChange}
                />
                <span className={done ? 'line-through' : ''}>{text}</span>
                <button
                    onClick={this.handleDelete}
                    className="delete-button"
                >
                    X
                </button>
            </div>
        );
    }

}

export default Todo;