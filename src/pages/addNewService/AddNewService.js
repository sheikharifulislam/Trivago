import axios from 'axios';
import React, { useRef } from 'react';
import './addNewService.css';
const AddNewService = () => {

    const serviceNameeRef = useRef();
    const serviceChargeRef = useRef();
    const serviceDetails = useRef();
    const serviceImageRef = useRef();
    const serviceTime = useRef();

    const handelAddSubmit = e => {
        
        e.preventDefault();
        const data = {
            image: serviceImageRef.current.value,
            placeName: serviceNameeRef.current.value,
            price: serviceChargeRef.current.value,
            details: serviceDetails.current.value,
            time: serviceTime.current.value,
        }

        axios.post('http://localhost:5000/add-service',data)
        .then((response) => {
            if(response.data.insertedId) {
                alert('succefully added');
                e.target.reset();
            }
        })
    }

    return (
        <div className="add-new-service-section">
           <div className="container">
                <div className="add-new-service-section-title">
                    <h2>Add New Service</h2>
                    <div className="add-service-container">
                        <form action="" onSubmit={handelAddSubmit}>
                            <div className="add-service-area">
                                <div className="add-service-from-design">
                                    <label htmlFor="service-name">Service Name</label>
                                    <input type="text"  placeholder="Enter Your Service Name" id="service-name" ref={serviceNameeRef} required/>
                                </div>
                                <div className="add-service-from-design">
                                    <label htmlFor="service-price">Service Charge</label>
                                    <input type="number"  placeholder="Enter Your Service Charge" id="service-price" ref={serviceChargeRef} required/>
                                </div>                                
                                <div className="add-service-from-design">
                                    <label htmlFor="service-details">Service Details</label>
                                    <textarea id="service-details" cols="40" rows="7" placeholder="Enter Your Descripaction" ref={serviceDetails}></textarea>
                                </div>
                                <div className="add-service-from-design">
                                    <label htmlFor="service-time">Service Time</label>
                                    <input type="text"  placeholder="Enter Your Service Time" id="service-price" ref={serviceTime} required/>
                                </div>
                                <div className="add-service-from-design">
                                    <label htmlFor="service-image">Service Image</label>                              
                                    <input type="text" placeholder="Enter Your Image Url" ref={serviceImageRef} />
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