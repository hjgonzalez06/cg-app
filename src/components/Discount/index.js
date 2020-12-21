import React from 'react';
import './styles.css';

const Discount = ({ product }) => {
    const {discountPercentage} = product;
    return (
        <div>
            <h4>Hasta un <span>{discountPercentage}%</span></h4>
        </div>
    );
};

export default Discount;
