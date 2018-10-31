import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    showIsLoading,
    showIsLoaded,
    showIsFailure,
    getShowData,
} from '../../selectors';
import { showRequest } from '../../actions';
import './ShowPage.css';

const mapStateToProps = state => ({
    showIsLoading: showIsLoading(state),
    showIsLoaded: showIsLoaded(state),
    showIsFailure: showIsFailure(state),
    dataShow: getShowData(state)
});

const mapDispatchToProps = { showRequest };

class ShowPage extends Component {
    constructor(props) {
        super(props);
        const { showRequest, match } = this.props;
        const showID = match.params.id;
        showRequest(showID);
    }

    render() {
        const { dataShow, showIsLoading, showIsLoaded, showIsFailure }
            = this.props;

        return (
            <div>
                {showIsLoading && <p>Show is loading...</p>}
                {showIsFailure &&
                    <p className="error">We have error. Please reload page</p>}
                {showIsLoaded && (
                    <div>
                        <p>{dataShow.name}</p>
                        {dataShow.image && (
                            <img
                                src={dataShow.image.medium}
                                alt={dataShow.name}
                                className="preview__image"
                            />
                        )}
                        <div>
                            <p dangerouslySetInnerHTML
                                ={{ __html: dataShow.summary }} />
                        </div>
                        <div className="t-row">
                            {dataShow.persons.map( ({ name, image, id }) => (
                                <div className="t-person" key={id}>
                                    <h4>{name}</h4>
                                    {image && (
                                        <img
                                            src={image.medium}
                                            alt={name}
                                            className="preview__image"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);
