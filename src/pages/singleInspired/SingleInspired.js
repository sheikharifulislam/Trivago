import React from 'react';
import './singleInspired.css';

const SingleInspired = (props) => {
    const {image,title} =props.inspired;
    const colorCode = props.colorCode;

    const titleBgColor = {
        backgroundColor: "rgb("+ colorCode.red + "," + colorCode.green + "," + colorCode.blue +")"
    }

    return (
        <div className="single-inspeired">
            <div className="single-insperied-image">
                <img src={image} alt="" />
            </div>
            <div className="single-inspired-title" style={titleBgColor}>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default SingleInspired;