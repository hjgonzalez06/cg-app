import React from 'react';
import './styles.scss';

const NavbarLink = ({ text, iconSrc, onClick }) => {

    return (
        <button onClick={onClick}>
            {text ? text : null}
            {iconSrc ? <img src={iconSrc} alt="Icono" /> : ''}
        </button>
    )
}

export default NavbarLink;
