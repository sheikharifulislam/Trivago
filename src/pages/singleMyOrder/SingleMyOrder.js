import React from 'react';
import axios from 'axios';
import './singleMyOrder.css';
import baseurl from '../../utlis/baseUrl'; 

const SingleMyOrder = (props) => {
    const {serviceName,serviceTime,servicePrice,orderDate,orderTime} = props.singleOrder
    const id = props.id;   
    const baseUrl = baseurl();
    
    const handerDeleteMyOrder = (e) => {       
       const confirmDelete = window.confirm('Are you sure you want to delete');
       if(confirmDelete) {
            axios.delete(`${baseUrl}delete-my-single-order?orderId=${id}`)
            .then((response) => {
                if(response.data.deletedCount >= 1) {
                    e.target.parentElement.parentElement.remove();                   
                    alert('Succefully delete order data');                    
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
       }
    }

    return (
        <div className="single-my-order">
            <div className="single-my-order-name">
                <p>{serviceName}</p>
            </div>
            <div className="single-my-order-service-time">
                <small>Service Time: {serviceTime}</small>
            </div>
            <div className="single-my-order-price">
                <small>Service Price: {servicePrice}</small>
            </div>
            <div className="single-my-order-date">
                <small>Order Date: {orderDate}</small>
            </div>
            <div className="single-my-order-time">
                <small>Order Time: {orderTime}</small>
            </div>
            <div className="delete-single-my-order">
                <button onClick={handerDeleteMyOrder}>Delete Order</button>
            </div>
        </div>
    );
};

export default SingleMyOrder;