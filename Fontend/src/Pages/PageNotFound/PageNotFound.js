import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <a href="/">Homepage</a>
                    <div className="notfound-social">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-pinterest"></i></a>
                        <a href="/"><i className="fab fa-google-plus"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;