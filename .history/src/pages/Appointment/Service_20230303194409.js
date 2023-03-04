import React from 'react';
import SharedButton from "./../Share/SharedButton";

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg ml-16 shadow-2xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length} slots available </p>
                <div className="card-actions justify-start">
                    <SharedButton>Booking Now</SharedButton>
                </div>
            </div>
        </div>
    );
};

export default Service;