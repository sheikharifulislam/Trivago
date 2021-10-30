import { useEffect, useState } from "react";


const LoadServiceData = () => {
    const [allService, setAllservice] = useState([]);
    
    useEffect(() => {
        fetch('/offerData.json')
        .then((response) => response.json())
        .then((data) => setAllservice(data))
        .catch((error) => console.log(error.message));
    }, [])

    return [allService];
};

export default LoadServiceData;