import React from 'react';
import LinkNavbar from '../../LinkNavbar';
import '../styles.css';

const LoggedOutLinks = ({ setLoggedIn }) => {
    return (
        <>
            <LinkNavbar texto="Creá tu cuenta" />
            <LinkNavbar texto="Ingresá" onClick={() => setLoggedIn(true)} />
            <LinkNavbar img="https://placehold.co/20x20" alt="Car" />
        </>
    );
};

export default LoggedOutLinks;
