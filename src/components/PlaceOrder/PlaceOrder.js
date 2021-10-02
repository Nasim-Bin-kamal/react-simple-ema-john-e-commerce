import React from 'react';
import image from '../../images/giphy.gif';
const PlaceOrder = () => {
    return (
        <div className="mx-auto text-center">
            <h2 className="my-3 text-success">Successfully Ordered!!</h2>
            <img className="w-25" src={image} alt="" />
        </div>
    );
};

export default PlaceOrder;