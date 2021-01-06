import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DropDown = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

DropDown.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default DropDown;
