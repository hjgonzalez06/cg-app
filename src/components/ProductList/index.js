import React from 'react';
import ProductCard from '../ProductCard';
import './styles.css';

const fakeProducts = [
    {
        id: 1,
        img: 'https://placehold.co/310x210?text=Imagen',
        oldPrice: '$250',
        newPrice: '$150',
        description: 'Esta es un tarjeta de producto de prueba.',
        colors: ['azul','blanco','negro'],
        groupOccupancy: 8,
        groupPercentage: 80,
        groupCapacity: 10,
        offerTime: new Date().toLocaleTimeString(),
        discountPercentage: 20
    },
    {
        id: 2,
        img: 'https://placehold.co/310x210?text=Imagen',
        oldPrice: '$250',
        newPrice: '$150',
        description: 'Esta es un tarjeta de producto de prueba.',
        colors: ['azul','blanco','negro'],
        groupOccupancy: 8,
        groupPercentage: 80,
        groupCapacity: 10,
        offerTime: new Date().toLocaleTimeString(),
        discountPercentage: 20
    },
    {
        id: 3,
        img: 'https://placehold.co/310x210?text=Imagen',
        oldPrice: '$250',
        newPrice: '$150',
        description: 'Esta es un tarjeta de producto de prueba.',
        colors: ['azul','blanco','negro'],
        groupOccupancy: 8,
        groupPercentage: 80,
        groupCapacity: 10,
        offerTime: new Date().toLocaleTimeString(),
        discountPercentage: 20
    },
    {
        id: 1,
        img: 'https://placehold.co/310x210?text=Imagen',
        oldPrice: '$250',
        newPrice: '$150',
        description: 'Esta es un tarjeta de producto de prueba.',
        colors: ['azul','blanco','negro'],
        groupOccupancy: 8,
        groupPercentage: 80,
        groupCapacity: 10,
        offerTime: new Date().toLocaleTimeString(),
        discountPercentage: 20
    }
]

const ProductList = ({ listTitle }) => {
    return (
        <div>
            <h2>{listTitle}</h2>
            <div>
                {fakeProducts.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        </div>
    );
};

export default ProductList;
