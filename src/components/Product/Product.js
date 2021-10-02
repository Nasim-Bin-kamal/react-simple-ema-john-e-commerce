import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import Feature from '../Feature/Feature';

const Product = (props) => {
    const { img, name, price, seller, stock, star, features } = props.product || {};
    // console.log(props.product);
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="d-flex justify-content-center align-items-center border border-3  shadow-lg mx-auto my-3 rounded-3">
            <div className="p-2 m-2">
                <img src={img} alt="" />
            </div>
            <div className="m-2 p-2">
                <h4 className="text-primary fw-medium">{name}</h4>
                <div className="row my-3">
                    <div className="col-6">
                        <p><small>By: {seller}</small></p>
                        <h4>Price: {price}</h4>
                        <Rating readonly
                            initialRating={star}
                            emptySymbol="far fa-star text-warning"
                            fullSymbol="fas fa-star text-warning"
                        ></Rating>
                        <div>
                            <p><small>Only {stock} left in stock -order soon!!</small></p>
                            <div className="btn btn btn-warning"
                                onClick={() => props.handleAddToCart(props.product)}>{cartIcon} Add To Cart</div>
                        </div>
                    </div>
                    <div className="col-6">

                        <h5>Features:</h5>
                        <ul>
                            {
                                features.map(feature => <li><Feature feature={feature}></Feature></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;