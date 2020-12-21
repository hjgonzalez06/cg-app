import React from 'react';
import './styles.css';

const DropDownButton = ({ texto, onClick }) => {
    return (
        <button onClick={onClick}>
            {texto}
        </button>
    );
};

export default DropDownButton;
