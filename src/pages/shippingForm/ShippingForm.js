import React from 'react';
import './shipping.css';

const ShippingForm = () => {
    return (
        <div className="shipping-form">
            <div className="shipping-form-container">
                <div className="shipping-form-title">
                    <h2>Shippin Form</h2>
                </div>
                <div className="shipping-form-design">
                    <input type="text" placeholder="Enter Your Name" required/>
                </div>
                <div className="shipping-form-design">
                    <input type="email" placeholder="Enter Your Email" required/>
                </div>
                <div className="shipping-form-design">
                    <input type="tel" placeholder="Enter Your Mobile Number" required/>
                </div>
                <div className="shipping-form-design">
                    <input type="text" placeholder="Enter Your Address" required/>
                </div>
                <div className="shipping-form-design">
                    <input type="submit" value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default ShippingForm;