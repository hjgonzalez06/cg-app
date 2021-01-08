import React from 'react'
import PropTypes from 'prop-types'

import NavbarLink from '../../NavbarLink'
import DropDown from '../../DropDown'

import '../styles.scss'

const LoggedInLinks = ({ setLoggedIn }) => {
  return (
    <>
      <NavbarLink text="Quiero vender" />
      <DropDown text="Usuario" onClick={() => setLoggedIn(false)} />
      <NavbarLink iconSrc="https://placehold.co/20x20" alt="Avisos" />
      <NavbarLink iconSrc="https://placehold.co/20x20" alt="Car" />
    </>
  )
}

LoggedInLinks.propTypes = {
  setLoggedIn: PropTypes.func
}

export default LoggedInLinks
