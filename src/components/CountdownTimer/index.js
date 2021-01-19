import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const CountdownTimer = ({ remainingTime }) => {
  return (
    <div>
      <img src="https://placehold.co/20x20" alt="Timer" />
      <h4>{remainingTime}</h4>
    </div>
  )
}

CountdownTimer.propTypes = {
  remainingTime: PropTypes.string
}

export default CountdownTimer
