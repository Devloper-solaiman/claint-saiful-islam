import React from 'react';

const Service = ({ Service }) => {
    const { name, slots } = Service;
    return (
        <div>
            {name}
        </div>
    );
};

export default Service;