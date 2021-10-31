import axios from 'axios';
import React from 'react';
import './singleManage.css';

const SingleManage = (props) => {
    const {_id,orderStatus,serviceName,servicePrice,} = props.manage;

    const singleManageStyle = {
        marginTop: '20px',
    }
    
    const handelConfirmOrder = (id) => {
        axios.patch(`http://localhost:5000/confirm-order/${id}`)
        .then((response) => {
            if(response.data.modifiedCount >= 1) {
                alert('Confirm Order Successfully');
                window.location.reload();
            }
        })
        .catch((error) => console.log(error))
    }
    
    return (
        <div className="single-manage">
            <div className="single-manage-place-name">
                <p>Name: {serviceName}</p>
            </div>
            <div className="single-manage-service-price">
                <small>price: {servicePrice}</small>
            </div>
            <div className="order-status">
                <small>Order Status: {orderStatus}</small>
            </div>
            {
                orderStatus.toLowerCase() === "pending" &&
                <div className="confirm-order" style={singleManageStyle}>
                    <button id="confirm-order-buttton" onClick={() => handelConfirmOrder(_id)}>Confirm Order</button>
                </div> 
                
            }
        </div>
    );
};

export default SingleManage;