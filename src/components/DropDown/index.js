import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.scss'

const DropDown = ({ text, onClick }) => {
  return (
      <button className={classes.dropdown} onClick={onClick}>
          {text}
      </button>
  )
}

DropDown.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default DropDown
