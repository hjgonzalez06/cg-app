import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import CountdownTimer from '../CountdownTimer'

const CountdownTimerContainer = ({ expirationDate }) => {
  let [remainingTime, setRemainingTime] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRemainingTime(remainingTime++)
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [expirationDate])

  return (
    <CountdownTimer remainingTime={remainingTime} />
  )
}

CountdownTimerContainer.propTypes = {
  expirationDate: PropTypes.string
}

export default CountdownTimerContainer
