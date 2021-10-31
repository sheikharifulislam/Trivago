import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../customHook/UseAuth';

const MyOrders = () => {

    const [myOrder, setMyorders] = useState([]);

    const {user} = UseAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/my-all-orders`)
        .then((response) => {
            setMyorders(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }, [])

    // const result = myOrder.filter((order) => {
    //     if(myOrder.userEmail === user.email) {

    //     }
    // }) 

    return (
        <div className="my-orders">
            
        </div>
    );
};

export default MyOrders;