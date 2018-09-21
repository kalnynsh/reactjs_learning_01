import React from 'react';

const DogComponent = ({match}) => {
    const {id} = match.params;

    return (
        <div>Dog #{id}</div>
    );
};

export default DogComponent;
