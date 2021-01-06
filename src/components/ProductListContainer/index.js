import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import './styles.scss';

const fakeProductsList = [
    {
        id: 1,
        productPhotoUrl: 'https://placehold.co/310x210?text=Imagen',
        listPrice: '$250.000,00',
        discountedPrice: '$200.000,00',
        discountPercentage: 20,
        expirationDate: new Date().toISOString(),
        description: 'Esta es un tarjeta de producto de prueba.',
        colors: ['azul','blanco','negro'],
        groupCapacity: 10,
        subscriptorsNumber: 8,
        occupancyPercentage: 80
    },
    {
        id: 2,
        productPhotoUrl: 'https://placehold.co/310x210?text=Imagen',
        listPrice: '$250.000,00',
        discountedPrice: '$200.000,00',
        discountPercentage: 20,
        expirationDate: new Date().toISOString(),
        description: 'Esta es un tarjeta de producto de prueba.',
        colors: ['azul','blanco','negro'],
        groupCapacity: 10,
        subscriptorsNumber: 8,
        occupancyPercentage: 80
    },
    {
        id: 3,
        productPhotoUrl: 'https://placehold.co/310x210?text=Imagen',
        listPrice: '$250.000,00',
        discountedPrice: '$200.000,00',
        discountPercentage: 20,
        expirationDate: new Date().toISOString(),
        description: 'Esta es un tarjeta de producto de prueba.',
        colors: ['azul','blanco','negro'],
        groupCapacity: 10,
        subscriptorsNumber: 8,
        occupancyPercentage: 80
    },
    {
        id: 4,
        productPhotoUrl: 'https://placehold.co/310x210?text=Imagen',
        listPrice: '$250.000,00',
        discountedPrice: '$200.000,00',
        discountPercentage: 20,
        expirationDate: new Date().toISOString(),
        description: 'Esta es un tarjeta de producto de prueba.',
        colors: ['azul','blanco','negro'],
        groupCapacity: 10,
        subscriptorsNumber: 8,
        occupancyPercentage: 80
    }
]

const ProductListContainer = ({ productIds, featuredProductId }) => {
    return (
        <div>
            {fakeProductsList.map(({
                id,
                productPhotoUrl,
                listPrice,
                discountedPrice,
                discountPercentage,
                expirationDate,
                description,
                colors,
                groupCapacity,
                subscriptorsNumber,
                occupancyPercentage
            }) => {
                return <ProductCard
                            key={id}
                            productPhotoUrl={productPhotoUrl}
                            listPrice={listPrice}
                            discountedPrice={discountedPrice}
                            discountPercentage={discountPercentage}
                            expirationDate={expirationDate}
                            description={description}
                            colors={colors.join(', ')}
                            groupCapacity={groupCapacity}
                            subscriptorsNumber={subscriptorsNumber}
                            occupancyPercentage={occupancyPercentage}
                            extended={id === featuredProductId}
                        />
            })}
        </div>
    );
};

ProductListContainer.propTypes = {
    productIds: PropTypes.arrayOf(PropTypes.number),
    featuredProductId: PropTypes.number
}

export default ProductListContainer;
