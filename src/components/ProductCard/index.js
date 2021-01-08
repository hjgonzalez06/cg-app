import React from 'react'
import PropTypes from 'prop-types'

import Timer from '../Timer'
import GroupOccupancy from '../GroupOccupancy'

import './styles.scss'

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
    <div>
      <img src={productPhotoUrl} alt="Imagen del producto" />
      <Timer remainingTime={expirationDate} />
      <div>
        <h4>Hasta un <span>{discountPercentage}%</span></h4>
      </div>
      <div>
        <div>
            <h4><s>{listPrice}</s></h4>
            <h3>{discountedPrice}</h3>
        </div>
        <p>{description}</p>
        <p>Colores: {colors}
        </p>
      </div>
      <GroupOccupancy
        groupCapacity={groupCapacity}
        subscriptorsNumber={subscriptorsNumber}
        occupancyPercentage={occupancyPercentage}
      />
      {extended && <button>Ver oferta</button>}
    </div>
  )
}

ProductCard.propTypes = {
  productPhotoUrl: PropTypes.string,
  listPrice: PropTypes.string,
  discountedPrice: PropTypes.string,
  discountPercentage: PropTypes.number,
  expirationDate: PropTypes.string,
  description: PropTypes.string,
  colors: PropTypes.string,
  groupCapacity: PropTypes.number,
  subscriptorsNumber: PropTypes.number,
  occupancyPercentage: PropTypes.number,
  extended: PropTypes.bool
}

export default ProductCard
