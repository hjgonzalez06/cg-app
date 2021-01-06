import React from 'react';
import PropTypes from 'prop-types';
import NavbarLink from '../../NavbarLink';
import '../styles.scss';

const LoggedOutLinks = ({ setLoggedIn }) => {
    return (
        <>
            <NavbarLink text="Creá tu cuenta" />
            <NavbarLink text="Ingresá" onClick={() => setLoggedIn(true)} />
            <NavbarLink iconSrc="https://placehold.co/20x20" alt="Car" />
        </>
    );
};

LoggedOutLinks.propTypes = {
    setLoggedIn: PropTypes.func
};

export default LoggedOutLinks;
