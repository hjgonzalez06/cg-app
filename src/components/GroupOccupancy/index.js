import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const GroupOccupancy = ({ groupCapacity, subscriptorsNumber, occupancyPercentage }) => {
  return (
    <div>
      <img src={`https://placehold.co/205x34?text=${subscriptorsNumber}`} alt="Figuras" />
      <h4>{occupancyPercentage}%</h4>
      <h4>{`${subscriptorsNumber}/${groupCapacity} agrupados`}</h4>
    </div>
  )
}

GroupOccupancy.propTypes = {
  groupCapacity: PropTypes.number,
  subscriptorsNumber: PropTypes.number,
  occupancyPercentage: PropTypes.number
}

export default GroupOccupancy
