import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import CountdownTimer from '../CountdownTimer'

const CountdownTimerContainer = ({ expirationDate }) => {
  const calculateRemainingTime = () => {
    const duration = require('dayjs/plugin/duration')
    dayjs.extend(duration)

    const difference = dayjs(expirationDate).diff(dayjs())

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
