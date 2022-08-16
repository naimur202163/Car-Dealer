import React, { useEffect, useState } from 'react';
import './ManageProducts.css';
import Rating from 'react-rating';


const ManageProducts = () => {

    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false);


    useEffect(() =>
        fetch('https://fathomless-temple-79377.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
        , [control]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this ?')
        if (proceed) {
            fetch(`https://fathomless-temple-79377.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setControl(!control);
                    }
                });
        }
    };


    return (
        <>
            <section className="add_content_heading">
                <h1>Manage Products</h1>
                <p> <a href="/"> <span>home</span> </a> <a href="/dashboard">&#62;&#62; <span>Dashboard</span></a> &#62;&#62; Manage Products </p>
            </section>
            <section className="featured manage_products" id="featured">
                <div className="featured-container manage_container">
                    {
                        products.map((product, index) => (
                            <div
                                className="box"
                                key={product._id}
                            >
                                <img src={product.services_photo} alt="" />
                                <div className="content">
                                    <h3>{product.title}</h3>
                                    <p>{product.description.slice(0, 120)}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="price">$ {product.price} /-</div>
                                        <div className="stars">
                                            <Rating
                                                emptySymbol="far fa-star icon-color-size"
                                                fullSymbol="fas fa-star icon-color-size"
                                                initialRating={product.Review}
                                                readonly
                                            ></Rating>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        
                                            <button className="btn">Update</button>
                                        
                                        <button
                                            onClick={() => handleDelete(product?._id)}
                                            className="btn">Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default ManageProducts;