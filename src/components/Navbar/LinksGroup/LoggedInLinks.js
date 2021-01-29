import React from 'react'
import PropTypes from 'prop-types'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import NavbarLink from '../../NavbarLink'
import DropDown from '../../DropDown'

const LoggedInLinks = ({ setLoggedIn }) => {
  return (
    <>
      <NavbarLink text="Quiero vender" />
      <DropDown text="Usuario" onClick={() => setLoggedIn(false)} />
      <NavbarLink iconSrc={faBell} />
      <NavbarLink iconSrc={faShoppingCart} isCart={true} />
    </>
  )
}

LoggedInLinks.propTypes = {
  setLoggedIn: PropTypes.func
}

export default LoggedInLinks
