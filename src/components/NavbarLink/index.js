import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const NavbarLink = ({ text, iconSrc, onClick }) => {
  return (
      <button onClick={onClick}>
          {text}
          {iconSrc ? <img src={iconSrc} alt="Icono" /> : ''}
      </button>
  )
}

NavbarLink.propTypes = {
  text: PropTypes.string,
  iconSrc: PropTypes.string,
  onClick: PropTypes.func
}

export default NavbarLink
