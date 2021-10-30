import React from 'react';
import bannerImage from '../../images/38.jpg';
import './headerBanner.css';

const HeaderBanner = () => {
    return (
        <div className="header-banner-section">
           <div className="header-banner-section-image">
               <img src={bannerImage}  alt="" />
           </div>
           <div className="header-banner-into-container">
                <div className="header-banner-into-title">
                    <h2>Find amazing things to do.</h2>
                    <h2>Anytime, anywhere.</h2>
                </div>
              <div className="header-banner-intro-form">
                <form action="">
                        <div className="form-design">
                            <input type="text" placeholder="Las Vegas, London, Paris..."/>
                        </div>
                        <div className="form-design">
                            <input type="date" placeholder="Dates" />
                            <input type="submit" value="Search" />
                        </div>
                    </form>
              </div>
            </div>
        </div>
    );
};

export default HeaderBanner;