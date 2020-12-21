import React from 'react';
import Discount from '../Discount';
import Timer from '../Timer';
import ProductDetails from '../ProductDetails';
import GroupOccupancy from '../GroupOccupancy';
import './styles.css';

const ProductCard = ({ product }) => {
    return (
        <div>
            <img src={product.img} alt="Imagen" />
            <Timer product={product} />
            <Discount product={product} />
            <ProductDetails product={product} />
            <GroupOccupancy product={product} />
        </div>
    );
};

export default ProductCard;
