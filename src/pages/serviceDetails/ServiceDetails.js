import React from 'react';
import { useHistory, useParams } from 'react-router';
import LoadServiceData from '../../customHook/LoadServiceData';
import SingleOrder from '../../customHook/SingleOrder';
import './serviceDetails.css';

const ServiceDetails = () => {

    const {serviceId} = useParams();
    const history = useHistory();

    const [allService] = LoadServiceData();
    const [singleOrder,setSingleOrder] = SingleOrder();
    

    const details = allService.find((service) => service.key === serviceId);
    
    

    const pushShipping = (service) => {
        setSingleOrder(service);
        history.push('/shipping');        
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
                        <div className="order-now-button">
                            <button onClick={() => pushShipping(details)}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;