import React, { useState } from 'react';
import LoggedOutLinks from './LinksGroup/LoggedOutLinks';
import LoggedInLinks from './LinksGroup/LoggedInLinks';
import './styles.scss';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    
    return (
        <nav className="navbar">
            <img className="logo" src="https://placehold.co/205x34" alt="Logo" />
            <div className="nav-items">
                {!loggedIn ?
                    <LoggedOutLinks setLoggedIn={setLoggedIn} />
                    :
                    <LoggedInLinks setLoggedIn={setLoggedIn} />
                }
            </div>
        </nav>
    );
};

export default Navbar;
