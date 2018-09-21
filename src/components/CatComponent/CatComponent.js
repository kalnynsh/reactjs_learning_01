import React from 'react';

const CatComponent = ({match}) => {
    // console.log(props);
    const {id} = match.params;
    return (
        <div>Cat #{id}</div>
    );
};

export default CatComponent;
