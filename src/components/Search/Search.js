import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview';
import {
    getSearchData,
    searchIsIdle,
    searchIsLoading,
    searchIsLoaded,
    searchIsFailure
} from '../../selectors';
import { searchRequest } from '../../actions';
import './Search.css';

const mapStateToProps = state => ({
    searchIsIdle: searchIsIdle(state),
    searchIsLoading: searchIsLoading(state),
    searchIsLoaded: searchIsLoaded(state),
    searchIsFailure: searchIsFailure(state),
    dataSearch: getSearchData(state)
});

const mapDispatchToProps = { searchRequest };

class Search extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    requestData = () => {
        const query = this.inputRef.current.value;
        const { searchRequest } = this.props;

        searchRequest(query);
    };

    render() {
        const {
            searchIsIdle,
            searchIsLoading,
            searchIsLoaded,
            searchIsFailure,
            dataSearch
        } = this.props;

        return (
            <div>
                <div>
                    {searchIsLoading && <p>Data loading...</p>}
                    {searchIsFailure &&
                        <p>We have error. Please reload page</p>}
                    {(searchIsIdle || searchIsLoaded) && (
                        <div>
                            <input ref={this.inputRef}
                                placeholder="Enter tv-show" />
                            <button onClick={this.requestData}> Search</button>
                        </div>
                    )}
                </div>
                <div className="t-search-result">
                        {
                            searchIsLoaded &&
                            dataSearch.map(({ id, name, image, summary }) => {
                                return (
                                    <ShowPreview
                                        id={id}
                                        name={name}
                                        image={image}
                                        key={id}
                                    />
                                );
                            })
                        }
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
