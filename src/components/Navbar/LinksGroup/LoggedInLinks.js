import React from 'react'
import PropTypes from 'prop-types'

import NavbarLink from '../../NavbarLink'
import DropDown from '../../DropDown'

const LoggedInLinks = ({ setLoggedIn }) => {
  return (
    <>
      <NavbarLink text='Quiero vender' />
      <DropDown text='Usuario' onClick={() => setLoggedIn(false)} />
      <NavbarLink iconSrc={'far fa-bell'} />
      <NavbarLink iconSrc={'fas fa-shopping-cart'} isCart={true} />
    </>
  )
}

LoggedInLinks.propTypes = {
  setLoggedIn: PropTypes.func
}

export default LoggedInLinks
