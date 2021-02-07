import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './styles.module.scss'

const NavbarLink = ({ text, iconSrc, isCart, onClick }) => {
  const linkClasses = classnames(classes.link, {
    [classes.icon]: iconSrc,
    [classes.cartIcon]: isCart
  })

  return (
      <button className={linkClasses} onClick={onClick}>
          {text}
          {iconSrc ? <i className={iconSrc} /> : null}
      </button>
  )
}

NavbarLink.propTypes = {
  text: PropTypes.string,
  iconSrc: PropTypes.string,
  isCart: PropTypes.bool,
  onClick: PropTypes.func
}

export default NavbarLink
