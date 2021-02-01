import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import classes from './styles.module.scss'

const CountdownTimer = ({ remainingTime }) => {
  return (
    <div className={classes.countdownTimer}>
      <FontAwesomeIcon icon={faClock} className={classes.clockIcon} />
      <h4 className={classes.countdownText}>{remainingTime}</h4>
    </div>
  )
}

CountdownTimer.propTypes = {
  remainingTime: PropTypes.string
}

export default CountdownTimer
