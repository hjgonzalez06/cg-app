import React from 'react';
import ProductList from '../ProductList';
import './styles.css';

const fakeCategories = [
    '¡Última chance!',
    'Los más populares',
    'Compra en dúo',
    'Grupos pequeños',
    'Grupos grandes'
];

const CategoryList = () => {
    return (
        fakeCategories.map((title, index) => <ProductList key={index} listTitle={title} />)
    ); 
};

export default CategoryList;
