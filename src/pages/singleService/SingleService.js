import React from 'react';
import { useHistory } from 'react-router-dom';
import './singleService.css';

const SingleService = (props) => {
    const {_id,image, placeName, time,price} = props.service;

    const history = useHistory();

    const pushDetailsPage = id => {
        history.push(`/service-details/${id}`);
    }

    return (
        <div className="single-service-card" onClick={() => pushDetailsPage(_id)}>
            <div className="single-services-container">
                <div className="single-service-image">
                    <img src={image} alt="" />
                </div>
                <div className="single-service-title">
                    <h3>{placeName}</h3>
                </div>
                <div className="single-service-time">
                    <small>Time: {time}</small>
                </div>
                <div className="single-service-price">
                    <small>Price: {price} $</small>
                </div>
            </div>
        </div>
    );
};

export default SingleService;