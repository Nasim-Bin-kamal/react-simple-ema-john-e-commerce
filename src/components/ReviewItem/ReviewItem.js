import React from 'react';

const ReviewItem = (props) => {
    const { key, name, price, seller, stock, quantity } = props.product || {};
    const { handleRemoveItem } = props || {};
    return (
        <div className=" border border-3 shadow-lg mx-auto my-3 p-2 rounded-3">
            <div className="m-2 p-2">
                <h4 className="text-primary fw-medium">{name}</h4>
                <div className="row my-3">
                    <div className="col-12">
                        <p><small>By: {seller}</small></p>
                        <h4>Price: {price}</h4>
                        <p>Quantity:{quantity}</p>
                        <div>
                            <p><small>Only {stock} left in stock -order soon!!</small></p>
                            <div className="btn btn btn-warning"
                                onClick={() => handleRemoveItem(key)}><i class="fas fa-trash-alt"></i> Remove</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ReviewItem;