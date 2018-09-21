import React from 'react';
import {Link, Route} from 'react-router-dom';
import CatComponent from '../CatComponent';
import DogComponent from '../DogComponent';

const Hobbies = ({match}) => {
    return (
        <div>
            <h3>Hobbies</h3>
            <div>
                <Link to={`${match.url}/cat/1`}>Cat 1 / </Link>
                <Link to={`${match.url}/cat/2`}> Cat 2 / </Link>
                <Link to={`${match.url}/dog/1`}> Dog 1</Link>
            </div>
            <div>
                <Route
                path={`${match.path}/cat/:id`}
                component={CatComponent}
                />
                <Route
                path={`${match.path}/dog/:id`}
                component={DogComponent}
                children={() => {}}
                />
            </div>
        </div>
    );
};

export default Hobbies;