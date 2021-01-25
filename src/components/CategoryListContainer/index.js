import React from 'react'

import ProductListContainer from '../ProductListContainer'
import useCategoryList from '../../hooks/useCategoryList'

import './styles.scss'

const CategoryListContainer = () => {
  const categoryList = useCategoryList()

  return (
    Object.entries(categoryList).map(([categoryTitle, productIds]) => {
      const featuredProductId = productIds[0]

      return (
          <>
              <h2>{categoryTitle}</h2>
              <ProductListContainer
                  productIds={productIds}
                  featuredProductId={featuredProductId}
              />
          </>
      )
    })
  )
}

export default CategoryListContainer
