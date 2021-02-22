import React from 'react'

import ProductListContainer from '../ProductListContainer'
import useCategoryList from '../../hooks/useCategoryList'

import classes from './styles.module.scss'

const CategoryListContainer = () => {
  const categoryList = useCategoryList()

  return (
    Object.entries(categoryList).map(([categoryTitle, { productIds, featuredProductId }]) => {
      return (
          <>
              <h2 className={classes.categoryTitle}>{categoryTitle}</h2>
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
