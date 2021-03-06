import React from 'react';

const Feature = (props) => {
    const { feature } = props || {};
    return (
        <div>
            <p><small><span>{feature?.description}</span>: <span>{feature?.value}</span></small></p>
        </div>
    );
};

export default Feature;