import React from 'react';
import './addNewService.css';
import fileUpImage from '../../images/cloud-upload-outline.png';

const AddNewService = () => {
    return (
        <div className="add-new-service-section">
           <div className="container">
                <div className="add-new-service-section-title">
                    <h2>Add New Service</h2>
                    <div className="add-service-container">
                        <form action="">
                            <div className="add-service-area">
                                <div className="add-service-from-design">
                                    <label htmlFor="service-name">Service Name</label>
                                    <input type="text"  placeholder="Enter Your Service Name" id="service-name" required/>
                                </div>
                                <div className="add-service-from-design">
                                    <label htmlFor="service-price">Service Charge</label>
                                    <input type="number"  placeholder="Enter Your Service Charge" id="service-price" required/>
                                </div>
                                <div className="add-service-from-design">
                                    <label htmlFor="service-details">Service Details</label>
                                    <textarea id="service-details" cols="40" rows="7" placeholder="Enter Your Descripaction"></textarea>
                                </div>
                                <div className="add-service-from-design">
                                    <label htmlFor="service-image">Service Image</label>                              
                                    <input type="file"  id="service-image" />
                                    <span id="file-upload-button">
                                        <img src={fileUpImage} alt="" />
                                        <small>upload image</small>
                                    </span>
                                </div>
                            </div>
                            <input type="submit" value="Add New" id="add-new-service-button"/>
                        </form>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default AddNewService;