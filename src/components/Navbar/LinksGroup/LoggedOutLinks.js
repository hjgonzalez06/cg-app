import React from 'react'
import PropTypes from 'prop-types'

import NavbarLink from '../../NavbarLink'

const LoggedOutLinks = ({ setLoggedIn }) => {
  return (
    <>
      <NavbarLink text='Creá tu cuenta' />
      <NavbarLink text='Ingresá' onClick={() => setLoggedIn(true)} />
      <NavbarLink iconSrc={'fas fa-shopping-cart'} isCart={true} />
    </>
  )
}

LoggedOutLinks.propTypes = {
  setLoggedIn: PropTypes.func
}

export default LoggedOutLinks
