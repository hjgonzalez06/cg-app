import React from 'react';
import LinkNavbar from '../../LinkNavbar';
import DropDownButton from '../../DropDownButton';
import '../styles.css';

const LoggedOutLinks = ({ setLoggedIn }) => {
    return (
        <>
            <LinkNavbar texto="Quiero vender" />
            <DropDownButton texto="Usuario" onClick={() => setLoggedIn(false)} />
            <LinkNavbar img="https://placehold.co/20x20" alt="Avisos" />
            <LinkNavbar img="https://placehold.co/20x20" alt="Car" />
        </>
    );
};

export default LoggedOutLinks;
