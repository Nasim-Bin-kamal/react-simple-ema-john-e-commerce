import React from 'react';
import logo from '../../images/logo.png';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <div className="container my-3 mx-auto">
                <img className="w-25 mx-auto d-block" src={logo} alt="" />
            </div>
            <div>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;