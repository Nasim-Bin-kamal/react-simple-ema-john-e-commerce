import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active  fs-5" aria-current="page" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/review">Order Review</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/inventory">Manage Inventory</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;