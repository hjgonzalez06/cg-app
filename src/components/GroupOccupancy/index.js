import React from 'react'
import PropTypes from 'prop-types'

import Units from './Units'

import classes from './styles.module.scss'

const GroupOccupancy = ({ groupCapacity, subscriptorsNumber, occupancyPercentage }) => {
  return (
    <div className={classes.groupOccupancy}>
      <Units groupCapacity={groupCapacity} occupancyPercentage={occupancyPercentage} />
      <div className={classes.occupancyInfo}>
        <span>{`${occupancyPercentage}%`}</span>
        <span>{`${subscriptorsNumber}/${groupCapacity} agrupados`}</span>
      </div>
    </div>
  )
}

GroupOccupancy.propTypes = {
  groupCapacity: PropTypes.number,
  subscriptorsNumber: PropTypes.number,
  occupancyPercentage: PropTypes.number
}

export default GroupOccupancy
