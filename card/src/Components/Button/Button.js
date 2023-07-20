import React from 'react';
import './Button.css';

const Button = ({ textColor }) => {
    const buttonStyle = {
        color: textColor
    };

    return (
        <button className="custom-button" style={buttonStyle}>
            Learn more
        </button>
    );
}

export default Button;
