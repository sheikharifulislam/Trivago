import {useState} from 'react';
const SingleOrder = () => {
    const [singleOrder, setSingleOrder] = useState({});
    return [
        singleOrder,
        setSingleOrder,
    ];
};

export default SingleOrder;