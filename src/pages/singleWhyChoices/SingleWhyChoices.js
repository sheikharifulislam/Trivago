import React from 'react';
import './singleWhyChoices.css';

const SingleWhyChoices = (props) => {
    const {image,title,descripaction} = props.choices;   
    return (
        <div className="single-why-choices">
            <div className="single-why-choices-image">
                <img src={image} alt="" />
            </div>
            <div className="single-why-choices-title">
                <h4>{title}</h4>
            </div>
            <div className="single-why-choices-descripaction">
                <p>{descripaction}</p>
            </div>
        </div>
    );
};

export default SingleWhyChoices;