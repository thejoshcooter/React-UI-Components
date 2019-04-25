import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={props.className}>
            {props.number}
        </button>
    );
};

export default NumberButton;
