import React from 'react'
import PropTypes from 'prop-types'

import ProductCard from '../ProductCard'
import useProductList from '../../hooks/useProductList'

import classes from './styles.module.scss'

const ProductListContainer = ({ productIds, featuredProductId }) => {
  const productList = useProductList()

  return (
    <div className={classes.productList}>
      {productList.map(({
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
  )
}

ProductListContainer.propTypes = {
  productIds: PropTypes.arrayOf(PropTypes.string),
  featuredProductId: PropTypes.string
}

export default ProductListContainer
