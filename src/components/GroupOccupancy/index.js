import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Units from './Units'

import classes from './styles.module.scss'

const GroupOccupancy = ({ groupCapacity, subscriptorsNumber, occupancyPercentage, extended }) => {
  return (
    <div className={classnames(classes.groupOccupancy, { [classes.extended]: extended })}>
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
  occupancyPercentage: PropTypes.number,
  extended: PropTypes.bool
}

export default GroupOccupancy
