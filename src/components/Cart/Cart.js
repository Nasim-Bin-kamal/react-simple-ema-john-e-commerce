import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    // const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);
    // const totalQuantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);
    const shipping = totalPrice > 0 ? 20 : 0;
    const tax = totalPrice * 0.1;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className="mt-5 border border-3 p-3 shadow-lg rounded-3">
            <h3 className="text-center mx-auto text-primary mb-4">Order Summary</h3>
            <h5 className="text-center mx-auto">Total Item Ordered: {totalQuantity}</h5>
            <div className="my-3 p-2">
                <h5>Total Price: {totalPrice.toFixed(2)}</h5>
                <p>Shipping: {shipping.toFixed(2)}</p>
                <p>Tax: {tax.toFixed(2)} </p>
                <h4 className="text-danger">Grand Total: {grandTotal.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;