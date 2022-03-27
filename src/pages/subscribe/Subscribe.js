import React from 'react';
import './subscribe.css';
import subscribeImage from '../../images/newsletter-background.jpg';

const Subscribe = () => {
    return (
        <section className="subscribe-section">
            <div className="container">
               <div className="subscribe-container">
                    <div className="subscribe-section-image">
                        <img src={subscribeImage} alt="subscribe banner" />
                    </div>
                    <div className="subscribe-section-into">
                       <div className="subscribe-section-into-container">
                            <div className="subscribe-section-into-text">
                                <h2>Your travel journey starts here</h2>
                                <p>Subscribe up now for travel tips, personalized itineraries, and vacation inspiration straight to your inbox.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="">
                                    <input type="email" placeholder="Enter Your Email Address"/>
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;