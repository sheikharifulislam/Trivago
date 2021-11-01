import axios from 'axios';
import React, {createContext, useRef } from 'react';
import { useParams } from 'react-router';
import LoadServiceData from '../../customHook/LoadServiceData';

import UseAuth from '../../customHook/UseAuth';
import './serviceDetails.css';

export const productData = createContext();

const ServiceDetails = () => {

    const {serviceId} = useParams();
    const {user} = UseAuth();

    const [allService] = LoadServiceData();
    
    

    const details = allService.find((service) => service._id === serviceId);
    
    
    const nameRef = useRef();
    const emailRef = useRef();
    const mobileNumberRef = useRef();
    const addressRef = useRef();

    const handelShippingForm = e => {
        e.preventDefault();
        function getFormateTime() {
            const now = new Date().toLocaleString();
        
            const date = now.split(',')[0].split('/');          
            const time = now.split(',')[1].split(':');
            return {
                date: `${date[1]}/${date[0]}/${date[2]}`,
                time: `${time[0]}:${time[1]}${time[2].slice(2)}`
            };
        }

        const {date} = getFormateTime();
        const {time} = getFormateTime();
        
      
        
        const data = {
            userEmail: user.email,            
            orderInfo: {
                customarName: nameRef.current.value,
                customarEmail: emailRef.current.value,
                customarMobile: mobileNumberRef.current.value,
                customarAddress: addressRef.current.value,
                serviceId: details?._id,
                serviceName: details?.placeName,
                serviceImage: details?.image,
                serviceTime: details?.time,
                servicePrice: details?.price,
                orderDate: date,
                orderTime: time,
                
            }
            
           
        }      

        axios.post('https://chilling-barrow-84882.herokuapp.com/add-order',data)
        .then((response) => {            
            if(response.data.insertedId) {
                alert('Successfully order');
            }
        });

        const orderData = {
                serviceId: details?._id,
                serviceName: details?.placeName,
                serviceImage: details?.image,
                serviceTime: details?.time,
                servicePrice: details?.price,                
                orderStatus: 'pending',
                orderDate: date,
                orderTime: time,
               
        }

        axios.post('https://chilling-barrow-84882.herokuapp.com/manage-add-orders',orderData);

        e.target.reset();
    } 

   

    return (
        <section className="service-details-section">
            <div className="container">
                <div className="service-details-container">
                    <div className="service-details-image">
                        <img src={details?.image} alt="" />
                    </div>
                    <div className="service-details-into">
                        <div className="service-name">
                            <h4>{details?.placeName}</h4>
                        </div>
                        <div className="service-time">
                            <span>{details?.time}</span>
                        </div>
                        <div className="service-charge">
                            <small>{details?.price} $</small>
                        </div>
                        <div className="service-details">
                            <p>{details?.details}</p>
                        </div>                           
                    </div>
                </div>
            </div>
            <div className="shipping-form">
                <div className="shipping-form-container">
                    <div className="shipping-form-title">
                        <h2>Shippin Form</h2>
                    </div>
                    <form action="" onSubmit={handelShippingForm}>
                        <div className="shipping-form-design">
                            <input type="text" placeholder="Enter Your Name" ref={nameRef} required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="email" placeholder="Enter Your Email" ref={emailRef} required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="tel" placeholder="Enter Your Mobile Number" ref={mobileNumberRef} required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="text" placeholder="Enter Your Address" ref={addressRef} required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
    );
};

export default ServiceDetails;