import React from 'react'
import PropTypes from 'prop-types'

import solidMale from '../../assets/occupancy-icons/solid-male.svg'
import outlineMale from '../../assets/occupancy-icons/outline-male.svg'

import classes from './styles.module.scss'

const _ = require('lodash')
const MAX_FIGURES = 10

const Units = ({ groupCapacity, occupancyPercentage }) => {
  const amountOfPersonIcons = (groupCapacity < MAX_FIGURES) ? groupCapacity : MAX_FIGURES
  const amountFull = Math.floor(amountOfPersonIcons * (occupancyPercentage / 100))
  const amountEmpty = amountOfPersonIcons - amountFull

  return (
    <div className={classes.occupancyIcons}>
      {_.times(amountFull).map((_, index) => <img className={classes.personIcon} src={solidMale} key={index} alt='' />)}
      {_.times(amountEmpty).map((_, index) => <img className={classes.personIcon} src={outlineMale} key={index} alt='' />)}
    </div>
  )
}

Units.propTypes = {
  groupCapacity: PropTypes.number,
  occupancyPercentage: PropTypes.number
}

export default Units
