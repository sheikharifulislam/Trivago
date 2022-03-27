import axios from "axios";
import { useEffect, useState } from "react";
import baseurl from '../utlis/baseUrl';


const LoadServiceData = () => {
    const [allService, setAllservice] = useState([]);
    const baseUrl = baseurl();
    
    useEffect(() => {
        axios.get(`${baseUrl}all-services`)
        .then((response) => setAllservice(response.data))       
        .catch((error) => console.log(error.message));
    }, [baseUrl])

    return [allService];
};

export default LoadServiceData;