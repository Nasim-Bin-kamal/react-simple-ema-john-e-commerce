import React from 'react';
import './Register.css'
import image from '../../images/reg-login.jpg';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Register = () => {

    const { handleUserRegister, handleNameChange, handleEmailChange, handlePasswordChange, errorMsg } = useAuth();

    return (
        <div className="container">
            <div className="border rounded-3 mx-auto my-5 p-3">
                <div className="row">
                    <div className="col mx-auto p-2">
                        <form onSubmit={handleUserRegister}
                            className="w-75 mx-auto border rounded-3 my-5 p-3 shadow-sm">
                            <h3 className="text-center mx-auto mb-4">Please Register First</h3>
                            <div className="mb-3">
                                <input className="form-control" onBlur={handleNameChange}
                                    type="text"
                                    placeholder="Full Name" required />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" onBlur={handleEmailChange}
                                    type="email"
                                    placeholder="Email Address" required />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" onBlur={handlePasswordChange}
                                    type="password"
                                    placeholder="Password" required />
                            </div>
                            <div>
                                <p className="text-center mx-auto text-danger">{errorMsg}</p>
                            </div>

                            <button className="btn w-50 rounded-pill mx-auto my-4 d-flex justify-content-center buttonBg"
                                variant=""
                                type="submit">Register
                            </button>
                            <p className="text-center my-3 mx-auto texti-muted "><small>Or Register With</small></p>
                            <div className="d-flex align-content-center justify-content-center">
                                <i className="fab fa-facebook mx-2  mb-3 fs-3"></i>
                                <i className="fab fa-google mx-2  mb-3 fs-3"></i>
                                <i className="fab fa-github mx-2  mb-3 fs-3"></i>
                                <i className="fab fa-twitter  mx-2  mb-3 fs-3"></i>
                            </div>

                            <div className="text-center mx-auto my-3">
                                <NavLink to="/login">Already Registered?</NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;