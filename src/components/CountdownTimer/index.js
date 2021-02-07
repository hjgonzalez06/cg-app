import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.scss'

const CountdownTimer = ({ remainingTime }) => {
  return (
    <div className={classes.countdownTimer}>
      <i className={`far fa-clock ${classes.clockIcon}`} />
      <h4 className={classes.countdownText}>{remainingTime}</h4>
    </div>
  )
}

CountdownTimer.propTypes = {
  remainingTime: PropTypes.string
}

export default CountdownTimer
