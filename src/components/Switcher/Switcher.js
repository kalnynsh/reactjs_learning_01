import React, { Component } from 'react';
import CardNumberHolder from '../CardNumberHolder';
import './Switcher.css';

class Switcher extends Component {
    state = {
        selectedChild: 0
    };

    handleChangeChild = event => {
        const id = event.target.dataset.id;

        this.setState(prevState => ({
            selectedChild: id
        }));
    };

    render() {
        const { children } = this.props;
        const childrenArray = React.Children.toArray(children);

        return (
            <div className="switcher">
                <nav>
                    <ul className="component-list">
                        {React.Children.map(children, (element, index) => {
                            return (
                                <li
                                    className="component-list__name"
                                    data-id={index}
                                    key={'.' + index}
                                    onClick={this.handleChangeChild}
                                >
                                    {element.type.displayName
                                        || element.type.name}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <hr />
                <div className="component-wrapper">
                        {childrenArray[this.state.selectedChild]}
                </div>
            </div>
        );
    }
}

export default Switcher;