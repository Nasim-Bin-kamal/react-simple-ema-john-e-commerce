import React from 'react';
import image from '../../images/reg-login.jpg';
import './Login.css';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const Login = () => {
    const { handleUserSignIn, handleEmailChange, handlePasswordChange, handleFacebookSignIn, handleGithubSignIn, handleGoogleSignIn, handleTwitterSignIn, errorMsg } = useAuth();

    const location = useLocation();
    const redirectUrl = location.state?.from || "/shop";
    console.log('came from', redirectUrl);
    const history = useHistory();

    const googlSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirectUrl);
            })

    }


    return (

        <div className="container">
            <div className="border rounded-3 mx-auto my-5 p-3">
                <div className="row">
                    <div className="col mx-auto p-2">
                        <form onSubmit={handleUserSignIn}
                            className="w-75 mx-auto border rounded-3 my-5 p-3 shadow-sm">
                            <h3 className="text-center mx-auto mb-4">Please Login First</h3>
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
                                type="submit">Login
                            </button>
                            <p className="text-center my-3 mx-auto texti-muted "><small>Or Login With</small></p>
                            <div className="d-flex align-content-center justify-content-center">
                                <i onClick={handleFacebookSignIn} className="fab fa-facebook mx-2  mb-3 fs-3"></i>
                                <i onClick={googlSignIn} className="fab fa-google mx-2  mb-3 fs-3"></i>
                                <i onClick={handleGithubSignIn} className="fab fa-github mx-2  mb-3 fs-3"></i>
                                <i onClick={handleTwitterSignIn} className="fab fa-twitter  mx-2  mb-3 fs-3"></i>
                            </div>

                            <div className="text-center mx-auto my-3">
                                <NavLink to="/register">Register New Account</NavLink>
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

export default Login;