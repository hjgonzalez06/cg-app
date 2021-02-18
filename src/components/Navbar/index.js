import React, { useState } from 'react'

import LoggedOutLinks from './LinksGroup/LoggedOutLinks'
import LoggedInLinks from './LinksGroup/LoggedInLinks'

import classes from './styles.module.scss'

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <nav className={classes.navbar}>
      <div>
        <span />
      </div>
      <div className={classes.navItems}>
        {!loggedIn
          ? <LoggedOutLinks setLoggedIn={setLoggedIn} />
          : <LoggedInLinks setLoggedIn={setLoggedIn} />
        }
      </div>
    </nav>
  )
}

export default Navbar
