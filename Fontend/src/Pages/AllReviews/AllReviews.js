import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import userTb from '../../images/usertb.png';
import Rating from 'react-rating';

const AllReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() =>
        fetch('https://fathomless-temple-79377.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
        , []);


    return (
        <>
            <Header />
            <section className="single_page_heading">
                <h1>Client's Reviews</h1>
                <p> <a href="/">home</a> &#62;&#62; Reviews </p>
            </section>
            <section className="reviews" id="reviews">
                <div className="reviews-container">
                    {
                        reviews.map(review => (
                            <div
                                key={review._id}
                                className=" box">
                                {review?.services_photo ?
                                    <img src={review?.services_photo} alt="" />
                                    :
                                    <img src={userTb} alt="" />
                                }
                                <h3>{review.client_name}</h3>
                                <p>{review.comment}</p>
                                <div className="stars">
                                    <Rating
                                        emptySymbol="far fa-star icon-color-size"
                                        fullSymbol="fas fa-star icon-color-size"
                                        initialRating={review.review}
                                        readonly
                                    ></Rating>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </section>
        </>
    );
};

export default AllReviews;