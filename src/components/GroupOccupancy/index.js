import React from 'react';
import './styles.css';

const GroupOccupancy = ({ product }) => {
    const {groupOccupancy, groupPercentage, groupCapacity} = product;
    
    return (
        <div>
            <h4>{groupOccupancy}</h4>
            <h4>{groupPercentage}%</h4>
            <h4>{`${groupOccupancy}/${groupCapacity} agrupados`}</h4>
        </div>
    );
};

export default GroupOccupancy;
