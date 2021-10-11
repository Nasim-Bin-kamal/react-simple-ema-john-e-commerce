import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import { useHistory } from 'react-router';



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const productQuantity = savedCart[key];
                    addedProduct.quantity = productQuantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);


    const handleAddToCart = product => {
        let newCart = [];
        //find if any existing product in the cart
        const exist = cart.find(pd => pd.key === product.key);
        if (exist) {
            const remaining = cart.filter(pd => pd.key !== product.key);
            exist.quantity += 1;
            newCart = [...remaining, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProduct);
    }

    const handleOrderReview = () => {
        history.push("/review");
    }

    return (
        <div>
            <div className="bg-dark py-2">
                <form className="d-flex w-50 mx-auto">
                    <input
                        onChange={handleSearch}
                        className="form-control me-2"
                        type="search" placeholder="Search Products"
                        aria-label="Search" />
                    <button className="btn btn-warning" type="submit">Search</button>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="mx-3 my-4 text-primary ">Products</h2>
                        {
                            displayProducts.map(product => <Product
                                key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            >
                            </Product>)
                        }
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart}>
                            <button
                                onClick={handleOrderReview}
                                className="btn btn-success">Order Review</button>
                        </Cart>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;