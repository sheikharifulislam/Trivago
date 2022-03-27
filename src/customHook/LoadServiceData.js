import axios from "axios";
import { useEffect, useState } from "react";

const LoadServiceData = () => {
    const [allService, setAllservice] = useState([]);
   
    
    useEffect(() => {
        axios.get(`https://floating-mountain-15300.herokuapp.com/all-services`)
        .then((response) => setAllservice(response.data))       
        .catch((error) => console.log(error.message));
    }, [])

    return [allService];
};

export default LoadServiceData;