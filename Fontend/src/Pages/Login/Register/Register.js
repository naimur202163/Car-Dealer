import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, authError, signInWithGoogle, registerUser, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert("Your Password did'nt match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault();

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <>
            <Header />
            <section className="single_page_heading">
                <h1>Account</h1>
                <p> <Link to="/login">Login</Link> &#62;&#62; Register </p>
            </section>
            <section className="register-form">

                {!isLoading &&
                    <div className="form_container">
                        <form onSubmit={handleLoginSubmit}>
                            <h3>register now</h3>
                            <div className="inputBox">
                                <span className="fas fa-user"></span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="enter your name"
                                    id="name"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-envelope"></span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="enter your email"
                                    id="email"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-lock"></span>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="enter your password"
                                    id="password"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-lock"></span>
                                <input
                                    type="password"
                                    name="password2"
                                    placeholder="confirm your password"
                                    id="password2"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                            <input type="submit" value="sign up" className="btn" />
                            <Link to="/login" className="already_acc">already have an account ?</Link>
                            <div className="py-3 fs-4">-----------------Or-----------------</div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn">Sign In With Google</button>
                    </div>
                }
                {
                    isLoading && <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                {
                    user?.email && <div className="success_error alert alert-success" role="alert">
                        User Created Success!
                    </div>
                }
                {
                    authError && <div className="success_error alert alert-danger" role="alert">
                        {authError}
                    </div>
                }

            </section>

        </>
    );
};

export default Register;