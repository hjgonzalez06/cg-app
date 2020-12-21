import React from 'react';
import './styles.css';

const ProductDetails = ({ product }) => {
    const { oldPrice, newPrice, description, colors } = product;

    return (
        <div>
            <div>
                <h4><s>{oldPrice}</s></h4>
                <h3>{newPrice}</h3>
            </div>
            <p>{description}</p>
            <p>Colores: {colors.map((color, index) => {
                    return <span key={index}>{color}, </span>
                })}
            </p>
        </div>
    );
};

export default ProductDetails;
