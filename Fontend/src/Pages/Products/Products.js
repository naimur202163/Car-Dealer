import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './Products.css';
import Rating from 'react-rating';


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>
        fetch('https://fathomless-temple-79377.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
        , []);


    return (
        <>
        <Header/>
            <section className="single_page_heading">
                <h1>Products</h1>
                <p> <a href="/">home</a> &#62;&#62; Products </p>
            </section>
            <section className="featured products" id="featured">
                <div className="featured-container products_container">
                {
                    products.map((product, index) => (
                        <div
                            className="box"
                            key={product._id}
                        >
                            <img src={product.services_photo} alt="" />
                            <div className="content">
                                <h3>{product.title}</h3>
                                <p>{product.description.slice(0,120)}</p>
                                <div className="stars">
                                <Rating
                                    emptySymbol="far fa-star icon-color-size"
                                    fullSymbol="fas fa-star icon-color-size"
                                    initialRating={product.Review}
                                    readonly
                                ></Rating>
                                </div>
                                <div className="price">$ {product.price} /-</div>
                                <Link to={`/productsDetails/${product._id}`} className="btn">Buy Now</Link>
                                {/* <div className="d-flex justify-content-between">
                            <a href="/" className="btn">check out</a>
                            <a href="/" className="btn">check out</a>
                        </div> */}
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
        </>
    );
};

export default Products;