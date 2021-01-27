import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import CountdownTimer from '../CountdownTimer'
import calculateRemainingTime from '../../utils/calculateRemainingTime'

const RECALCULATE_TIME = 1000

const CountdownTimerContainer = ({ expirationDate }) => {
  const [remainingTime, setRemainingTime] = useState(() => calculateRemainingTime(expirationDate))

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemainingTime(calculateRemainingTime(expirationDate))
    }, RECALCULATE_TIME)

    return () => clearInterval(timerId)
  }, [expirationDate])

  return (
    <CountdownTimer remainingTime={remainingTime} />
  )
}

CountdownTimerContainer.propTypes = {
  expirationDate: PropTypes.string
}

export default CountdownTimerContainer
