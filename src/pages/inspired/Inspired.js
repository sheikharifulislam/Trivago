import React, { useEffect, useState } from 'react';
import SingleInspired from '../singleInspired/SingleInspired';
import './inspired.css';

const Inspired = () => {

    const [inspired, setInspired] = useState([]);
    useEffect(() => {
        fetch('/familyInspired.json')
        .then((response) => response.json())
        .then((data) => setInspired(data))
        .catch((error) => console.log(error.message))
    }, []);

  
    return (
        <section className="inspired-section">
            <div className="container-fluid">
                <div className="inspired-section-title">
                    <h4>Get inspired for a family trip</h4>
                    <p>Book homes with space, convenience and amenities</p>
                </div>
                <div className="all-inspired">
                    {
                        inspired.map((inspired) => <SingleInspired
                        key={inspired.key}
                        inspired={inspired}
                        colorCode={{
                            red: Math.round(Math.random() * 200),
                            green: Math.round(Math.random() * 120),
                            blue: Math.round(Math.random() * 225),
                        }}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Inspired;