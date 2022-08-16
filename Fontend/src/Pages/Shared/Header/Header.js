import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
import logo from '../../../images/carDealerLogo.png';


const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <section className="fixed-top bg-white  shadow">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allReviews">Reviews</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li> */}
                        </ul>
                        <div className="d-flex">

                            {
                                user?.email ?
                                    <div>
                                        <>
                                        <span className="user-name">{user.displayName} : </span>
                                        <button onClick={logOut} className="tb_btn"> Log Out </button>
                                        </>

                                        <Link to="/dashboard"><button className="tb_btn ms-3"> <i className="far fa-user"></i> Admin</button></Link>
                                        
                                    </div>
                                    :
                                    <Link to="/login"><button className="tb_btn"> Login </button></Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;