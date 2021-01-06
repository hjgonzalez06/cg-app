import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Timer = ({ expirationDate }) => {
    return (
        <div>
            <img src="https://placehold.co/20x20" alt="Timer" />
            <h4>{expirationDate}</h4>
        </div>
    );
};

Timer.propTypes = {
    expirationDate: PropTypes.string
};

export default Timer;
