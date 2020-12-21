import React from 'react';
import './styles.css';

const LinkNavbar = ({ texto, img, onClick }) => {

    return (
        <button onClick={onClick}>
            {texto ? texto : null}
            {img ? <img src={img} alt="Imagen" /> : ''}
        </button>
    )
}

export default LinkNavbar;
