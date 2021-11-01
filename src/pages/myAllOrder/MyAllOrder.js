import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../customHook/UseAuth';
import SingleMyOrder from '../singleMyOrder/SingleMyOrder';
import './myAllOrder.css';

const MyAllOrder = () => {
    const [myAllOrders, setMyAllOrders] = useState([]);
    const {user} = UseAuth();

    useEffect(() => {
        axios.get(`https://chilling-barrow-84882.herokuapp.com/my-all-orders?userEmailId=${user.email}`)
        .then((response) => {
            setMyAllOrders(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }, []);

    return (
        <div className="my-all-orders-section">
            <div className="container">
                <div className="my-all-order-section-title">
                    <h2>my all orders</h2>
                    <hr />
                </div>
                <div className="my-all-order-container">
                    {
                        myAllOrders.map((singleOrder) => <SingleMyOrder
                        key={singleOrder._id}
                        id={singleOrder._id}
                        singleOrder={singleOrder.orderInfo}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyAllOrder;