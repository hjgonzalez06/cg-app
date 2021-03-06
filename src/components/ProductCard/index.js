import React from 'react'
import PropTypes from 'prop-types'

import CountdownTimerContainer from '../CountdownTimerContainer'
import GroupOccupancy from '../GroupOccupancy'

import classes from './styles.module.scss'

const ProductCard = ({
  productPhotoUrl,
  listPrice,
  discountedPrice,
  discountPercentage,
  expirationDate,
  description,
  colors,
  groupCapacity,
  subscriptorsNumber,
  occupancyPercentage,
  extended
}) => {
  return (
    <div className={classes.productCard}>
      <div className={classes.imgContainer}>
        <img src={productPhotoUrl} alt='' />
        <CountdownTimerContainer expirationDate={expirationDate} />
        <div className={classes.discountBadge}>
          <h4>Hasta un <span>{discountPercentage}</span>
          </h4>
        </div>
      </div>
      <div className={classes.productInfo}>
        <div className={classes.pricesSection}>
          <h4>{listPrice}</h4>
          <h3>{discountedPrice}</h3>
        </div>
        <p>{description}</p>
        <p>Colores: {colors}</p>
      </div>
      <GroupOccupancy
        groupCapacity={groupCapacity}
        subscriptorsNumber={subscriptorsNumber}
        occupancyPercentage={occupancyPercentage}
      />
    </div>
  )
}

ProductCard.propTypes = {
  productPhotoUrl: PropTypes.string,
  listPrice: PropTypes.string,
  discountedPrice: PropTypes.string,
  discountPercentage: PropTypes.string,
  expirationDate: PropTypes.string,
  description: PropTypes.string,
  colors: PropTypes.string,
  groupCapacity: PropTypes.number,
  subscriptorsNumber: PropTypes.number,
  occupancyPercentage: PropTypes.string,
  extended: PropTypes.bool
}

export default ProductCard
