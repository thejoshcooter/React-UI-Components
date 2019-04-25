import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = props => {
    return (
        <div>
            <CardBanner />
            <CardContent />
        </div>
    );
};

export default CardContainer