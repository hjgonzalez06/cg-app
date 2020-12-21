import React from 'react';
import './styles.css';

const Timer = ({ product }) => {
    const {offerTime} = product;
    return (
        <div>
            <img src="https://placehold.co/20x20" alt="Timer" />
            <h4>{offerTime}</h4>
        </div>
    );
};

export default Timer;
