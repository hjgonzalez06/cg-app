import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './styles.module.scss'

const CountdownTimer = ({ remainingTime, extended }) => {
  return (
    <div className={classnames(classes.countdownTimer, { [classes.extended]: extended })}>
    {extended
      ? <><i className={'far fa-clock'} /><span>!Apurate! Esta oferta termina en</span><span>{remainingTime}</span></>
      : <><i className={'far fa-clock'} /><span>{remainingTime}</span></>
    }
    </div>
  )
}

CountdownTimer.propTypes = {
  remainingTime: PropTypes.string,
  extended: PropTypes.bool
}

export default CountdownTimer
