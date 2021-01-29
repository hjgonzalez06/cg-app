import React from 'react'
import PropTypes from 'prop-types'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import NavbarLink from '../../NavbarLink'

const LoggedOutLinks = ({ setLoggedIn }) => {
  return (
    <>
      <NavbarLink text="Creá tu cuenta" />
      <NavbarLink text="Ingresá" onClick={() => setLoggedIn(true)} />
      <NavbarLink iconSrc={faShoppingCart} isCart={true} />
    </>
  )
}

LoggedOutLinks.propTypes = {
  setLoggedIn: PropTypes.func
}

export default LoggedOutLinks
