import React, { useEffect, useState } from 'react';
import SingleWhyChoices from '../singleWhyChoices/SingleWhyChoices';
import './whyChoices.css';

const WhyChoices = () => {

    const [choicesData, setChoicesData] = useState([]);

    useEffect(() => {
        fetch('/whyChoices.json')
        .then((response) => response.json())
        .then((data) => setChoicesData(data))
        .catch((error) => console.log(error.message))
    }, []);

    return (
        <section className="Why-Choices-section">            
            <div className="container">
                <div className="why-choices-section-title">
                    <h2>Why book with Trivago?</h2>
                    <hr />
                </div>
                <div className="why-choices-container">
                    {
                        choicesData.map((choices) => <SingleWhyChoices
                        key={choices.key}
                        choices={choices}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default WhyChoices;