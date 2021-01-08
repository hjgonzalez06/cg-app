import React from 'react'

import ProductListContainer from '../ProductListContainer'

import './styles.scss'

const fakeCategoryList = {
  '¡Última chance!': ['1', '2', '3', '4'],
  'Los más populares': ['1', '2', '3', '4'],
  'Compra en dúo': ['1', '2', '3', '4'],
  'Grupos pequeños': ['1', '2', '3', '4'],
  'Grupos grandes': ['1', '2', '3', '4']
}

const CategoryListContainer = () => {
  return (
    Object.entries(fakeCategoryList).map(([categoryTitle, productIds]) => {
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
