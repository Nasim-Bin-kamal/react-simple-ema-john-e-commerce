import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemoveItem = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    const handlePlaceOrder = () => {
        history.push("/placeorder");
        setCart([]);
        clearTheCart();
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <h2 className="mx-3 my-4 text-primary ">Ordered Products</h2>
                    {
                        cart.map(product => <ReviewItem
                            key={product.key}
                            product={product}
                            handleRemoveItem={handleRemoveItem}
                        ></ReviewItem>)
                    }
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}>
                        <button
                            onClick={handlePlaceOrder}
                            className="btn btn-success">Place Order</button>
                    </Cart>

                </div>
            </div>
        </div>
    );
};

export default OrderReview;