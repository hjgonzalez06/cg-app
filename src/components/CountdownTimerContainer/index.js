import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import CountdownTimer from '../CountdownTimer'

const duration = require('dayjs/plugin/duration')

const CountdownTimerContainer = ({ expirationDate }) => {
  const calculateRemainingTime = () => {
    dayjs.extend(duration)

    const difference = dayjs(expirationDate).diff(dayjs())

    if (difference <= 0) return 'EXPIRÓ'

    return dayjs.duration({
      hours: dayjs(expirationDate).diff(dayjs(), 'hours'),
      minutes: dayjs(difference).minute(),
      seconds: dayjs(difference).second()
    }).format('HH:mm:ss')
  }

  const [remainingTime, setRemainingTime] = useState(() => calculateRemainingTime())
  const RECALCULATE_TIME = 1000

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemainingTime(() => calculateRemainingTime())
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
