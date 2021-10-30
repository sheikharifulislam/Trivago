import React from 'react';
import LoadServiceData from '../../customHook/LoadServiceData';
import SingleService from '../singleService/SingleService';
import './allServices.css';

const AllServices = () => {
    
    const [allService] = LoadServiceData();
    
    return (
       <section className="all-services-section">
           <div className="container">
               <div className="all-services-section-title">
                   <h2>our all services</h2>
                   <hr />
               </div>
               <div className="all-service-container">
                   {
                        allService.map((service) => <SingleService
                        key={service.key}
                        service={service}
                        />)
                   }
               </div>
           </div>
       </section>
    );
};

export default AllServices;