import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleManage from '../singleManage/SingleManage';

const ManageAllOrder = () => {

    const [allManageAllOrder, setManageAllOrders] = useState([]);

    useEffect(() => {
        axios.get('https://chilling-barrow-84882.herokuapp.com/manage-all-orders')
        .then((response) => {
            setManageAllOrders(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        })
        
    }, [])   
    

    const manageStyle = {
        marginTop: '50px',
    }

    return (
        <div className="manage-all-orders" style={manageStyle}>
            <div className="container">
                {
                    allManageAllOrder.map((manage) => <SingleManage
                    key={manage._id}
                    manage={manage}
                    />)
                }
            </div>
        </div>
    );
};

export default ManageAllOrder;