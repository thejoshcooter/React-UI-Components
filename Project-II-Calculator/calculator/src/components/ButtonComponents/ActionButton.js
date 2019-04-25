import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className="three-col">
            {props.text}
        </button>
    );
};

export default ActionButton;
