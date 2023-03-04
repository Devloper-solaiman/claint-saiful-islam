import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div>
            {name}
        </div>
    );
};

export default Service;