import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.scss'

const GroupOccupancy = ({ groupCapacity, subscriptorsNumber, occupancyPercentage }) => {
  return (
    <div className={classes.groupOccupancy}>
      <img src={`https://placehold.co/205x34?text=${subscriptorsNumber}`} alt='' />
      <div className={classes.occupancyInfo}>
        <h4 className={classes.occupancyPercentage}>{occupancyPercentage}</h4>
        <h4 className={classes.occupancyText}>{`${subscriptorsNumber}/${groupCapacity} agrupados`}</h4>
      </div>
    </div>
  )
}

GroupOccupancy.propTypes = {
  groupCapacity: PropTypes.number,
  subscriptorsNumber: PropTypes.number,
  occupancyPercentage: PropTypes.string
}

export default GroupOccupancy
